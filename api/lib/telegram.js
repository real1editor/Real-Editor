import fetch from 'node-fetch';

export async function sendTelegramMessage(botToken, chatId, text, parse_mode='Markdown') {
  if(!botToken || !chatId) throw new Error('Missing Telegram config');
  const url = https://api.telegram.org/bot${botToken}/sendMessage;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode })
  });
  const j = await res.json();
  return j;
}
