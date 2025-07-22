"use client";
import React from "react";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      style={{ willChange: "transform, opacity" }}
      transition={{
        duration: 1,
        opacity: { type: "tween", ease: "easeOut", delay: 0.3 },
        translateY: { type: "spring", damping: 30, stiffness: 100, delay: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
