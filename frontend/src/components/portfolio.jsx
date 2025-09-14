import React from 'react';
import { motion } from 'framer-motion';

const PORTFOLIO = [
  { title: "YouTube - Hair Oil Edit", url: "https://youtube.com/watch?v=xxx" },
  { title: "TikTok Viral Edit", url: "https://vm.tiktok.com/xxx" },
  { title: "Reels - Before/After", url: "https://instagram.com/p/xxx" }
];

export default function Portfolio(){
  return (
    <section className="bg-gradient-to-b from-white/2 to-transparent p-5 rounded-2xl border border-white/6">
      <h2 className="text-lg font-semibold">🎬 Portfolio</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PORTFOLIO.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-white/3 border border-white/3"
          >
            <div className="font-medium">{p.title}</div>
            <div className="text-xs text-cinematic-700 mt-2">View</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
