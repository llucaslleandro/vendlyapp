"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-auto h-auto",
    md: "w-auto h-auto",
    lg: "w-auto h-auto",
  };

  const textClasses = {
    sm: "text-[1.5rem] md:text-[1.75rem]",
    md: "text-[2.5rem] md:text-[3rem]",
    lg: "text-[3.5rem] md:text-[5.5rem]",
  };

  return (
    <div className={`relative flex items-center justify-center ${className} select-none`}>
      {/* Dynamic Brand Glow */}
      <motion.div
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute inset-[-40%] bg-primary/40 blur-[50px] rounded-full hidden md:block"
      />
      
      <div className="relative z-10 flex items-center">
        <span 
          className={`font-black italic tracking-tighter text-white ${textClasses[size]}`}
          style={{ 
            lineHeight: 1,
            fontFamily: 'var(--font-space-grotesk)',
            textShadow: '0 0 20px rgba(200, 182, 255, 0.3)',
            transform: 'skewX(-2deg)'
          }}
        >
          VENDLY
        </span>
        {/* Subtle Accent Line */}
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>
    </div>
  );
};
