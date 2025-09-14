import React, { useState } from 'react';

export default function FeedbackForm(){
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  async function submit(e){
    e.preventDefault();
    setMsg('');
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.target).entries());
    // simple validation
    if(!data.message || data.message.trim().length < 5){
      setMsg('Please write a short message.');
      setLoading(false);
      return;
    }
    try{
      const res = await fetch('/api/feedback', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
      const j = await res.json();
      if(res.ok && j.ok){ setMsg('Thanks — feedback sent'); e.target.reset(); }
      else setMsg(j.error || 'Server error');
    }catch(err){ setMsg('Network error'); }
    finally { setLoading(false); }
  }

  return (
    <section className="bg-gradient-to-b from-white/2 to-transparent p-5 rounded-2xl border border-white/6">
      <h2 className="text-lg font-semibold">💭 Suggestions & Feedback</h2>
      <form onSubmit={submit} className="mt-4">
        <input name="name" placeholder="Your name (optional)" className="w-full p-3 rounded-lg bg-transparent border border-white/6 mb-3" />
        <textarea name="message" placeholder="Your feedback, idea, or critique" className="w-full p-3 rounded-lg bg-transparent border border-white/6 mb-3 min-h-[80px]" required />
        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading} className="px-4 py-2 rounded-lg border border-white/6">
            {loading ? <span className="inline-block animate-spin w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full" /> : 'Send Feedback'}
          </button>
          {msg && <div className="text-xs text-cinematic-700">{msg}</div>}
        </div>
      </form>
    </section>
  );
}
