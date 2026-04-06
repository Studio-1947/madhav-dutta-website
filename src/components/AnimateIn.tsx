"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ease, fadeUp, fadeLeft } from "@/lib/motion";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
}

export function StaggerIn({
  children,
  className,
  staggerDelay = 0.08,
  containerDelay = 0,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: containerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild: Variants = fadeUp;
export const staggerChildLeft: Variants = fadeLeft;
