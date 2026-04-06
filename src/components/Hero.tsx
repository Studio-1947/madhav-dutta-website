"use client";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0D0D0D] flex items-center overflow-hidden"
    >
      {/* Animated background word */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 flex items-center justify-center text-[22vw] font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter"
      >
        DIGNITY
      </motion.span>

      {/* Left red accent bar — grows down */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="absolute left-0 top-0 h-full w-1 bg-[#FF2E0A] origin-top"
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 79px,#fff 79px,#fff 80px), repeating-linear-gradient(90deg,transparent,transparent 79px,#fff 79px,#fff 80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="text-[#FF2E0A] text-[10px] sm:text-sm font-semibold tracking-[0.12em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8"
        >
          OP Jindal Global University · Student Election 2026
        </motion.p>

        <motion.h1
          className="font-serif font-black text-white leading-[0.9] mb-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
          }}
        >
          <motion.span
            className="block text-[clamp(4rem,12vw,10rem)]"
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            Madhav
          </motion.span>
          <motion.span
            className="block text-[clamp(4rem,12vw,10rem)] text-[#FF2E0A]"
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            Dutta.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="text-white/60 text-base sm:text-lg md:text-2xl font-light max-w-xl leading-relaxed mb-10 sm:mb-12"
        >
          Student life must be organised around{" "}
          <em className="text-white not-italic font-semibold">dignity.</em>
          <br />
          That is not a slogan. It is a standard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#agenda"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#FF2E0A] hover:bg-[#C4220A] text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide inline-block"
          >
            See the Agenda
          </motion.a>
          <motion.a
            href="#strands"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide inline-block"
          >
            The 5 Pillars
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
