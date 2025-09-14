import React from 'react';
import { motion } from 'framer-motion';

export default function Services(){
  const services = [
    'YouTube long-form editing (story & pacing)',
    'TikTok & Reels viral-ready edits',
    'Motion graphics & transitions',
    'Custom requests & packages'
  ];
  return (
    <section className="bg-gradient-to-b from-white/2 to-transparent p-5 rounded-2xl border border-white/6">
      <h2 className="text-lg font-semibold">💼 Services</h2>
      <motion.ul className="mt-3 space-y-2">
        {services.map((s,i)=>(
          <motion.li key={i} whileHover={{ x: 6 }} className="text-sm">• {s}</motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
