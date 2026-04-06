"use client";
import { motion, type Variants } from "framer-motion";
import { ease } from "@/lib/motion";
import AnimateIn, { StaggerIn } from "./AnimateIn";

const strands = [
  {
    num: "01",
    text: "Dignity means being ",
    bold: "trusted as an adult",
    rest: ", not policed like a suspect.",
  },
  {
    num: "02",
    text: "Dignity means being able to ",
    bold: "study, eat, move, rest, and live",
    rest: " without fighting for basics.",
  },
  {
    num: "03",
    text: "Dignity means ",
    bold: "health, fitness, hygiene, and recreation",
    rest: " are real parts of student life, not optional extras.",
  },
  {
    num: "04",
    text: "Dignity means ",
    bold: "support, not punishment",
    rest: " through rigid systems.",
  },
  {
    num: "05",
    text: "Dignity means ",
    bold: "democratic voice, equal representation",
    rest: ", and accountable student governance.",
  },
];

const rowVariant: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
};

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-[#FF2E0A] py-16 sm:py-24 md:py-32 overflow-hidden relative"
    >
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-black text-white/[0.06] text-[20vw] leading-none select-none pointer-events-none whitespace-nowrap"
      >
        FIVE
      </motion.span>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <AnimateIn delay={0.05}>
            <p className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              The Compact
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="font-serif font-black text-white text-3xl md:text-5xl">
              Five Strands. One Standard.
            </h2>
          </AnimateIn>
        </div>

        <StaggerIn
          className="divide-y divide-white/20"
          containerDelay={0.25}
          staggerDelay={0.1}
        >
          {strands.map((s) => (
            <motion.li
              key={s.num}
              variants={rowVariant}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-4 sm:gap-6 md:gap-10 py-5 sm:py-7 list-none group cursor-default"
            >
              <span className="font-serif font-black text-white/30 text-lg sm:text-xl md:text-2xl shrink-0 pt-0.5 group-hover:text-white/70 transition-colors duration-200">
                {s.num}
              </span>
              <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed group-hover:text-white transition-colors duration-200">
                {s.text}
                <strong className="text-white font-semibold">{s.bold}</strong>
                {s.rest}
              </p>
            </motion.li>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
