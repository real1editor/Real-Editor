// api/register.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({error:'method'});
  const BOT_TOKEN = process.env.7999488073:AAEwrwD3mdybpj1UTgT1uui4sQD_uSq_vVk;
  const ADMIN_CHAT = process.env.8078820148;
  if(!BOT_TOKEN || !ADMIN_CHAT) return res.status(500).json({error:'missing env'});

  const { name, email, phone, service, notes } = req.body || {};
  const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });

  const message = 📝 *New Project Registration*\n\n +
    👤 *Name:* ${name||'-'}\n +
    📧 *Email:* ${email||'-'}\n +
    📞 *Phone:* ${phone||'-'}\n +
    🛠 *Service:* ${service||'-'}\n +
    🗒 *Notes:* ${notes||'-'}\n +
    \n⏱ _UTC_: ${date};

  try{
    const tg = await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id: ADMIN_CHAT, text: message, parse_mode: 'Markdown' })
    });
    const j = await tg.json();
    if(!j.ok) return res.status(500).json({error:'tg failed', detail:j});
    return res.json({ok:true});
  }catch(err){
    console.error(err);
    return res.status(500).json({error:'server error'});
  }
};    const result = await response.json();
    if (!result.ok) {
      return res.status(500).json({ error: 'Telegram API failed', detail: result });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Telegram error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
