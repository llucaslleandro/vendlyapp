"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const ValueCard = ({ title, description, icon: Icon, delay = 0 }: ValueCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="h-full bg-card border-white/[0.05] backdrop-blur-2xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden flex flex-col shadow-2xl">
        {/* Animated Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="pb-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110">
            <Icon className="w-7 h-7 text-primary/60 group-hover:text-primary transition-colors duration-500" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors font-heading leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex-1">
          <p className="text-muted-foreground text-base leading-relaxed group-hover:text-white/80 transition-colors">
            {description}
          </p>
        </CardContent>
        
        {/* Bottom indicator */}
        <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 mt-auto" />
      </Card>
    </motion.div>
  );
};
