import React from 'react';
import { motion } from 'framer-motion';

const testimonies = [
  { quote: "Fast, cinematic edits — exactly what my channel needed.", author: "A. Mekonnen" },
  { quote: "Pro-level transitions and pacing. Highly recommend.", author: "S. Bekele" },
  { quote: "Turned our raw footage into a viral short.", author: "M. Haile" }
];

export default function Testimonials(){
  return (
    <section className="bg-gradient-to-b from-white/2 to-transparent p-5 rounded-2xl border border-white/6 overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">⭐ Testimonials</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {testimonies.map((t,i)=>(
          <motion.div key={i} whileHover={{ scale:1.02 }} className="min-w-[240px] p-4 bg-white/3 rounded-lg border border-white/6">
            <div className="text-sm italic">"{t.quote}"</div>
            <div className="mt-3 text-xs font-medium text-cinematic-700">— {t.author}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
