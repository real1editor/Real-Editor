import { sendTelegramMessage } from '../lib/telegram.js';
import { sendFallbackEmail } from '../lib/mailer.js';
import { logSubmission } from '../lib/logger.js';

export default async function registerHandler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'method' });

    const { name, email, phone, service, notes, website } = req.body || {};

    // Honeypot: if website field is present, treat as spam
    if (website && website.trim() !== '') {
      return res.status(400).json({ error: 'spam detected' });
    }

    // Basic validation
    if (!name || name.trim().length < 2) return res.status(400).json({ error: 'invalid name' });
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'invalid email' });
    if (!service) return res.status(400).json({ error: 'invalid service' });

    const date = new Date().toISOString();
    const message = 📝 *New Project Registration*\n\n +
      👤 *Name:* ${escapeMarkdown(name)}\n +
      📧 *Email:* ${escapeMarkdown(email)}\n +
      📞 *Phone:* ${escapeMarkdown(phone || '-')}\n +
      🛠 *Service:* ${escapeMarkdown(service)}\n +
      🗒 *Notes:* ${escapeMarkdown(notes || '-')}\n\n +
      ⏱ _UTC_: ${date};

    // Always log submissions as backup
    logSubmission({ type: 'register', timestamp: date, name, email, phone, service, notes });

    // Attempt to send Telegram message
    try {
      const BOT_TOKEN = process.env.BOT_TOKEN;
      const ADMIN_CHAT = process.env.ADMIN_CHAT_ID;
      const tg = await sendTelegramMessage(BOT_TOKEN, ADMIN_CHAT, message);
      if (!tg || !tg.ok) {
        // fallback: send email and return 200 with fallback note
        await sendFallbackEmail({ subject: 'Fallback: new registration', text: message });
        return res.status(200).json({ ok: true, fallback: true, note: 'Telegram failed, sent fallback email' });
      }
      return res.json({ ok: true });
    } catch (tgErr) {
      console.error('Telegram error', tgErr);
      // fallback mail
      try {
        await sendFallbackEmail({ subject: 'Fallback: new registration', text: message });
        return res.status(200).json({ ok: true, fallback: true });
      } catch(mailErr){
        console.error('Mail fallback failed', mailErr);
        return res.status(500).json({ error: 'delivery failed' });
      }
    }
  } catch (err) {
    console.error('registerHandler error', err);
    return res.status(500).json({ error: 'server error' });
  }
}

// Helper to escape markdown special characters in Telegram
function escapeMarkdown(text = '') {
  return String(text).replace(/([_\*\[\]\(\)~`>#+\-=|{}\.!])/g, '\\$1');
      }
