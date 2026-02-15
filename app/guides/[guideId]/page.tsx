"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { guidesData } from '@/lib/guides-db';
import { CheckCircle, Wrench, ShieldCheck, Zap, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function RepairProcessPage() {
  const params = useParams();
  const guide = guidesData[params.guideId as string];
  const [currentStep, setCurrentStep] = useState(0);

  if (!guide) return <div className="p-20 text-center font-black">GUIDE_NOT_FOUND</div>;

  const progress = Math.round(((currentStep + 1) / guide.steps.length) * 100);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* OS Header */}
      <header className="p-8 flex items-center justify-between border-b border-gray-50">
        <Link href="/guides" className="flex items-center gap-4 group">
          <div className="p-2 bg-blue-600 text-white rounded-xl group-hover:scale-110 transition-transform"><Zap size={20} /></div>
          <div>
            <h1 className="font-black uppercase text-lg tracking-tighter">Nanobanana</h1>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Repair_OS // v2.0</p>
          </div>
        </Link>
        
        {/* Progress System */}
        <div className="flex-1 max-w-xl mx-20">
          <div className="flex justify-between text-[10px] font-black uppercase mb-3 tracking-widest">
            <span className="text-gray-400">Step {currentStep + 1} of {guide.steps.length}</span>
            <span className="text-blue-600">{progress}% Optimized</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-700 ease-out" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
        
        <Link href="/" className="px-6 py-2 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
          Abort Session
        </Link>
      </header>

      {/* Repair Interface */}
      <div className="flex-1 flex p-8 gap-10 overflow-hidden">
        {/* Step Visualization Area */}
        <div className="flex-1 bg-gray-50 rounded-[3.5rem] overflow-hidden relative border border-gray-100 shadow-inner group">
          <img 
            src={guide.steps[currentStep].image || "/images/placeholder-repair.jpg"} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Current Step" 
          />
          <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-black text-sm">
                {currentStep + 1}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight">{guide.steps[currentStep].title}</h2>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed mb-6">{guide.steps[currentStep].desc}</p>
            
            <div className="flex gap-4">
              {currentStep > 0 && (
                <button onClick={() => setCurrentStep(s => s - 1)} className="px-6 py-3 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-colors">Previous</button>
              )}
              <button 
                onClick={() => currentStep < guide.steps.length - 1 ? setCurrentStep(s => s + 1) : null}
                className="flex-1 py-3 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-xl"
              >
                {currentStep === guide.steps.length - 1 ? "Complete Repair" : "Next Procedure"}
              </button>
            </div>
          </div>
        </div>

        {/* Technical Data Sidebar */}
        <div className="w-96 flex flex-col gap-8">
          <div className="p-8 bg-gray-50 rounded-[3rem] border border-gray-100">
            <h3 className="text-xs font-black uppercase text-gray-400 mb-6 tracking-widest flex items-center gap-2">
              <Wrench size={14} className="text-blue-600" /> Required Module
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {guide.tools.map((tool: any, i: number) => (
                <div key={i} className="p-4 bg-white rounded-3xl border border-gray-100 flex flex-col items-center hover:shadow-lg transition-all">
                  <span className="text-3xl mb-2">{tool.icon}</span>
                  <span className="text-[10px] font-black uppercase text-center text-gray-500">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gray-50 rounded-[3rem] border border-gray-100 flex-1">
            <h3 className="text-xs font-black uppercase text-gray-400 mb-6 tracking-widest flex items-center gap-2">
              <ShieldCheck size={14} className="text-green-500" /> Success Metrics
            </h3>
            <div className="space-y-6">
              {guide.steps.map((s: any, i: number) => (
                <div key={i} className={`flex items-center gap-4 text-xs font-bold transition-opacity ${i <= currentStep ? 'opacity-100' : 'opacity-20'}`}>
                  <CheckCircle size={18} className={i < currentStep ? 'text-green-500' : 'text-blue-500'} />
                  <span className="uppercase tracking-tight">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}