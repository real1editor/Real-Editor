import React from 'react';
import { Moon, Sun, Film } from 'lucide-react';
import DarkToggle from './DarkToggle';
import { motion } from 'framer-motion';

export default function Header(){
  return (
    <motion.header initial={{ y:-20, opacity:0 }} animate={{ y:0, opacity:1 }} className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-3">
          <Film size={24} />
          Real1Editor — Creative Hub
        </h1>
        <p className="text-sm text-cinematic-700 mt-1">Elite Video Editing — Creativity meets precision</p>
      </div>
      <div className="flex items-center gap-3">
        <DarkToggle />
      </div>
    </motion.header>
  );
}
