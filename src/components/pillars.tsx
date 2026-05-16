"use client";

import React from "react";
import { motion } from "framer-motion";

export const Pillars = () => {
  const items = [
    { 
      label: "CAIXA", 
      sub: "Caixa sob controle",
      description: "Entenda entradas, saídas, pendências e dinheiro disponível em tempo real."
    },
    { 
      label: "ESTOQUE", 
      sub: "Estoque inteligente",
      description: "Controle aparelhos, IMEI, custos, margem e giro sem depender de planilhas."
    },
    { 
      label: "VENDAS", 
      sub: "Vendas com margem",
      description: "Acompanhe lucro real, negociações, trocas, upgrades e downgrades com clareza."
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-16 md:py-24 px-6 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center group"
        >
          <div className="relative mb-6">
            <span className="text-5xl md:text-6xl font-black italic tracking-tighter text-white/5 group-hover:text-primary/20 transition-colors duration-700 font-heading select-none block">
              {item.label}
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary/80 group-hover:text-primary transition-colors duration-700 mt-2">
              {item.sub}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] group-hover:text-white/70 transition-colors duration-500">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
