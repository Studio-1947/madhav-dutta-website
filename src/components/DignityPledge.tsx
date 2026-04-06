"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import AnimateIn from "./AnimateIn";

export default function DignityPledge() {
  const [pledged, setPledged] = useState(false);
  const [count, setCount] = useState(1240); // Starting number for visual impact
  const [isHovered, setIsHovered] = useState(false);

  const handlePledge = () => {
    if (!pledged) {
      setPledged(true);
      setCount((prev) => prev + 1);
      // In a real app, this would hit an API
    }
  };

  return (
    <section className="bg-[#0D0D0D] py-20 sm:py-32 overflow-hidden relative">
      {/* Decorative Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2E0A]/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <AnimateIn delay={0.1}>
          <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Join the Movement
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <h2 className="font-serif font-black text-white text-3xl sm:text-5xl md:text-6xl leading-tight mb-8">
            Dignity is a <span className="text-[#FF2E0A]">Collective</span> Demand.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            If you believe student life should be organised around trust, 
            fairness, and basic ease — stand with us.
          </p>
        </AnimateIn>

        <div className="flex flex-col items-center gap-8">
          <motion.button
            onClick={handlePledge}
            disabled={pledged}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-10 py-5 rounded-full font-bold text-lg tracking-wide transition-all duration-500
              ${pledged 
                ? "bg-white text-[#0D0D0D] cursor-default" 
                : "bg-[#FF2E0A] text-white hover:shadow-[0_0_40px_rgba(255,46,10,0.4)]"
              }
            `}
          >
            <AnimatePresence mode="wait">
              {pledged ? (
                <motion.span
                  key="pledged"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  You've Pledged Support
                </motion.span>
              ) : (
                <motion.span
                  key="pledge"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Pledge Your Support
                </motion.span>
              )}
            </AnimatePresence>
            
            {/* Inner glow effect on hover */}
            {!pledged && isHovered && (
              <motion.div
                layoutId="glow"
                className="absolute inset-0 rounded-full bg-white/20 blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.button>

          <AnimateIn delay={0.5} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0D0D0D] bg-[#222] overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-[#FF2E0A] to-[#C4220A]' : 'from-gray-600 to-gray-800'}`} />
                  </div>
                ))}
              </span>
              <span className="text-white font-serif font-black text-2xl ml-2 tabular-nums">
                {count.toLocaleString()}
              </span>
            </div>
            <p className="text-white/40 text-sm tracking-wide">
              Students have already committed to this standard.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
