"use client";
import { motion } from "framer-motion";
import AnimateIn, { StaggerIn, staggerChild } from "./AnimateIn";

const standards = [
  { label: "Trust as Adults", color: "#FF2E0A" },
  { label: "Basics without Battle", color: "#FF2E0A" },
  { label: "Health & Recreation", color: "#FF2E0A" },
  { label: "Support not Punishment", color: "#FF2E0A" },
  { label: "Democratic Voice", color: "#FF2E0A" },
];

export default function DignityStandard() {
  return (
    <section className="bg-white py-20 sm:py-32 overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <AnimateIn direction="left" delay={0.1}>
              <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                The Standard
              </p>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.2}>
              <h2 className="font-serif font-black text-[#0D0D0D] text-3xl sm:text-5xl leading-tight mb-8">
                Dignity is the <span className="text-[#FF2E0A]">Standard</span> by which campus life should be judged.
              </h2>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.3}>
              <p className="text-[#5A5A5A] text-lg leading-relaxed mb-8 font-light">
                This isn't just a list of requests. It is a holistic framework 
                designed to reform the moral and functional tone of our university. 
                When even one of these pillars fails, the institution fails its students.
              </p>
            </AnimateIn>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] bg-[#FF2E0A] w-full mb-12 origin-left"
            />
          </div>

          <StaggerIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {standards.map((std, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                whileHover={{ x: 12 }}
                className="group flex items-center gap-6 p-6 bg-[#FAFAFA] border border-black/5 rounded-2xl cursor-default hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <span className="font-serif font-black text-2xl text-[#FF2E0A]/20 group-hover:text-[#FF2E0A] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#0D0D0D] font-bold text-lg group-hover:translate-x-1 transition-transform duration-300">
                  {std.label}
                </span>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </div>
    </section>
  );
}
