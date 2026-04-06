"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimateIn, { StaggerIn, staggerChild } from "./AnimateIn";

const stats = [
  { num: 5, suffix: "", label: "Dignity Pillars" },
  { num: 25, suffix: "+", label: "Concrete Actions" },
  { num: 1, suffix: "", label: "Core Standard" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#FAFAFA] py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
          <AnimateIn direction="left" delay={0.1}>
            <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase pt-1">
              Who is Madhav?
            </p>
          </AnimateIn>

          <div>
            <AnimateIn delay={0.15}>
              <h2 className="font-serif font-black text-[#0D0D0D] text-2xl sm:text-3xl md:text-5xl leading-tight mb-6 sm:mb-8">
                A student who believes campus life can be better — and is ready
                to fight for it.
              </h2>
            </AnimateIn>

            <StaggerIn
              className="space-y-4 text-[#2A2A2A] text-base md:text-lg leading-relaxed max-w-2xl"
              containerDelay={0.3}
            >
              <motion.p variants={staggerChild}>
                Madhav Datta is a student at OP Jindal Global University running
                for the Student Union. His campaign is built on one foundational
                idea: every student deserves to live, study, and grow in an
                environment that respects their dignity.
              </motion.p>
              <motion.p variants={staggerChild}>
                This is not a campaign of vague promises. It is a campaign with
                a clear, concrete agenda — five pillars, twenty-five specific
                reforms, all anchored to one standard:{" "}
                <strong className="text-[#0D0D0D]">
                  Are we treating students as trusted adults?
                </strong>
              </motion.p>
            </StaggerIn>

            <StaggerIn
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 border-t border-[#0D0D0D]/10 pt-8 sm:pt-10"
              containerDelay={0.5}
              staggerDelay={0.12}
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={staggerChild}>
                  <p className="font-serif font-black text-[#FF2E0A] text-3xl sm:text-4xl md:text-5xl leading-none mb-1">
                    <CountUp target={s.num} suffix={s.suffix} />
                  </p>
                  <p className="text-[#2A2A2A] text-xs sm:text-sm font-medium leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </StaggerIn>
          </div>
        </div>
      </div>
    </section>
  );
}
