const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const BOT_TOKEN = process.env.7999488073:AAEwrwD3mdybpj1UTgT1uui4sQD_uSq_vVk;
  const ADMIN_CHAT = process.env.8078820148;

  if (!BOT_TOKEN || !ADMIN_CHAT) {
    return res.status(500).json({ error: 'Missing bot token or chat ID' });
  }

  const { name, message: msg } = req.body || {};
  const date = new Date().toLocaleString('en-GB', { timeZone: 'Africa/Addis_Ababa' });

  const text = 
💡 *Feedback / Idea*\n
👤 *From:* ${name || 'Anonymous'}\n
💬 *Message:* ${msg || '-'}\n
⏱ _Time (EAT)_: ${date}
  ;

  try {
    const response = await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: ADMIN_CHAT,
        text,
        parse_mode: 'Markdown'
      })
    });

    const result = await response.json();
    if (!result.ok) {
      return res.status(500).json({ error: 'Telegram API failed', detail: result });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Telegram error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
