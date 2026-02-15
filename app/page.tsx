// app/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // New dependency for animations
import { Search, Bike, Zap, ArrowRight, Gauge, ShieldCheck } from 'lucide-react';

// Animation variants for consistency
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="p-8 max-w-[1400px] mx-auto space-y-20"
    </motion.div>
  );
}

// Full Page implementation with Framer Motion
export function NanobananaHome() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-20">
      
      {/* --- HERO SECTION: NANOBANANA BRANDING --- */}
      <section className="relative flex flex-col items-center justify-center text-center py-12">
        <motion.h1 
          variants={fadeInUp}
          className="text-[12vw] font-black tracking-tighter leading-none mb-4 text-black select-none"
        >
          NANOBANANA
        </motion.h1>
        
        {/* Animated Navigation Bar */}
        <motion.nav 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-16"
        >
          {['Diagnose', 'Battery Repair', 'Motor Maintenance', 'Parts Store', 'Troubleshooting'].map((item, i) => (
            <span key={i} className={`cursor-pointer hover:text-black transition-colors ${item === 'Parts Store' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}>
              {item}
            </span>
          ))}
        </motion.nav>
        
        {/* Floating 3D Scooter with Framer Motion Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
          }}
          className="relative w-full max-w-5xl h-[500px] flex items-center justify-center cursor-crosshair"
        >
          <motion.img 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            src="/images/hero-scooter.png" 
            alt="Nanobanana Scooter" 
            className="w-full h-auto object-contain z-10"
          />
          {/* Pulsing Dynamic Shadow */}
          <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-10 w-1/2 h-10 bg-black blur-[60px] rounded-full" 
          />
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="absolute right-0 bottom-20 group cursor-pointer hidden lg:block"
        >
          <p className="text-2xl font-black italic flex items-center gap-2">
            Meet NANOBANANA <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </p>
        </motion.div>
      </section>

      {/* --- TECH SPECS GRID (Bento Style) --- */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <motion.div variants={fadeInUp} className="md:col-span-2 bg-gray-50 rounded-[3rem] p-10 border border-gray-100 flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all">
          <div className="flex justify-between items-start">
            <h2 className="text-6xl font-black uppercase">P1 <span className="text-gray-200">SERIES</span></h2>
            <div className="p-4 bg-white rounded-full shadow-sm"><Zap className="text-yellow-500" /></div>
          </div>
          <p className="text-gray-500 font-medium max-w-xs mt-4">Precision engineered for the urban navigator. System optimized at 100%.</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 flex flex-col justify-center items-center text-center hover:bg-blue-600 group transition-all">
          <Gauge className="mb-4 text-blue-600 group-hover:text-white transition-colors" size={40} />
          <p className="text-3xl font-black group-hover:text-white transition-colors uppercase">28 MPH</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-blue-200 transition-colors">Top Velocity</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 flex flex-col justify-center items-center text-center hover:bg-black group transition-all">
          <ShieldCheck className="mb-4 text-black group-hover:text-white transition-colors" size={40} />
          <p className="text-3xl font-black group-hover:text-white transition-colors uppercase">94%</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-500 transition-colors">Inventory</p>
        </motion.div>
      </motion.div>

      {/* --- QUICK ACTION SEARCH --- */}
      <motion.section 
        variants={fadeInUp}
        className="flex justify-center pb-20"
      >
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input 
            type="text" 
            placeholder="DIAGNOSE ERROR CODE (E.G. E13)..." 
            className="w-full bg-gray-50 border border-gray-100 rounded-full py-6 pl-16 pr-8 text-sm font-black uppercase tracking-widest focus:outline-none focus:bg-white focus:shadow-2xl transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.section>
    </div>
  );
}