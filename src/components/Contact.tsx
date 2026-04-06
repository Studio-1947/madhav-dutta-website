"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0D0D0D] py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left */}
          <div>
            <AnimateIn delay={0.05}>
              <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Join the Campaign
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="font-serif font-black text-white text-2xl sm:text-3xl md:text-5xl leading-tight mb-6">
                Stand for Dignity.
                <br />
                <span className="text-[#FF2E0A]">Vote Madhav Dutta.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.25}>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                This campaign belongs to every student who has had to fight for
                something that should have been guaranteed. If you believe
                campus life can be better — stand with Madhav.
              </p>
            </AnimateIn>
          </div>

          {/* Right — card */}
          <AnimateIn delay={0.2} direction="right">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                Reach Out
              </p>
              <motion.a
                href="mailto:campaign@madhavdutta.in"
                whileHover={{ color: "#FF2E0A", x: 4 }}
                transition={{ duration: 0.15 }}
                className="block text-white text-lg font-medium mb-8 break-all"
              >
                campaign@madhavdutta.in
              </motion.a>

              <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Follow the Campaign
              </p>
              <div className="flex gap-3 mb-8">
                {["Instagram", "LinkedIn"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#FF2E0A",
                      color: "#FF2E0A",
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="border border-white/20 text-white/70 text-sm font-medium px-5 py-2.5 rounded-full"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-white/30 text-xs leading-relaxed">
                  OP Jindal Global University · Student Election 2026
                  <br />
                  Paid for by the Madhav Dutta Campaign Committee
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
