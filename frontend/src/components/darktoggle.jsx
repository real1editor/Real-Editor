import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkToggle(){
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark(d => !d)}
      className="p-2 rounded-md border border-white/6 bg-white/2"
    >
      {dark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
