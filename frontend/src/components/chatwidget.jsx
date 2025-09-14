import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatWidget(){
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 bg-white/3 p-3 rounded-lg border border-white/6">
          <div className="font-semibold">Live Chat (placeholder)</div>
          <div className="text-xs text-cinematic-700 mb-2">This is a basic chat that could be connected to Telegram later.</div>
          <button onClick={() => setOpen(false)} className="mt-2 text-sm underline">Close</button>
        </div>
      )}
      <button
        onClick={() => setOpen(o=>!o)}
        className="p-3 rounded-full bg-cinematic-accent text-white shadow-lg"
        aria-label="Open chat"
      >
        <MessageCircle size={18} />
      </button>
    </div>
  );
}
