// api/feedback.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({error:'method'});
  const BOT_TOKEN = process.env.7999488073:AAEwrwD3mdybpj1UTgT1uui4sQD_uSq_vVk;
  const ADMIN_CHAT = process.env.8078820148;
  if(!BOT_TOKEN || !ADMIN_CHAT) return res.status(500).json({error:'missing env'});

  const { name, message: msg } = req.body || {};
  const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });

  const text = 💡 *Feedback / Idea*\n\n +
    👤 *From:* ${name || 'Anonymous'}\n +
    💬 *Message:* ${msg || '-'}\n\n +
    ⏱ _UTC_: ${date};

  try{
    const tg = await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id: ADMIN_CHAT, text, parse_mode: 'Markdown' })
    });
    const j = await tg.json();
    if(!j.ok) return res.status(500).json({error:'tg failed', detail:j});
    return res.json({ok:true});
  }catch(err){
    console.error(err);
    return res.status(500).json({error:'server error'});
  }
};
