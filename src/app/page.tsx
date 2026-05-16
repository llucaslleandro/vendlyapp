"use client";

import React from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { ValueCard } from "@/components/value-card";
import { Pillars } from "@/components/pillars";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Wallet, ShoppingBag, Monitor, ChevronRight, Zap, CheckCircle2, AlertCircle } from "lucide-react";

export default function Home() {
  const cards = [
    {
      title: "Estoque inteligente",
      description: "Controle aparelhos, variações, custos, margem e disponibilidade em um só lugar.",
      icon: Package,
    },
    {
      title: "Fluxo de caixa",
      description: "Visualize entradas, saídas, pendências e movimentações financeiras sem confusão.",
      icon: Wallet,
    },
    {
      title: "Vendas e negociações",
      description: "Gerencie vendas, trocas, parcelamentos, margens e negociações reais da loja.",
      icon: ShoppingBag,
    },
    {
      title: "Vitrine integrada",
      description: "Mostre seus produtos online e envie clientes direto para o WhatsApp.",
      icon: Monitor,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white flex flex-col items-center overflow-x-hidden font-sans">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.1]" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px]" />
        <motion.div
          animate={{ x: [-500, 1000], opacity: [0, 0.2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-0 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent rotate-[-15deg] blur-sm"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-7xl px-6 py-8 flex items-center justify-between">
        <Logo size="sm" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/60">Em desenvolvimento</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-6 min-h-[80vh] flex flex-col items-center justify-center text-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-150" />
            <Logo size="lg" className="mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center mb-6 px-4">
              <Badge variant="outline" className="bg-primary/5 border-primary/30 text-primary px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] backdrop-blur-sm text-center leading-tight">
                <Zap className="w-3 h-3 mr-2 fill-primary shrink-0" />
                <span>Sistema operacional para lojas de celulares</span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.05] text-white font-heading max-w-4xl mx-auto px-4">
              O controle da sua loja em uma
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[oklch(0.9_0.1_280)] to-primary animate-gradient"> nova velocidade.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4">
              Pare de operar no escuro. A Vendly conecta vendas, estoque, caixa e operação em uma experiência moderna feita para lojas de celulares.
            </p>

            <div className="flex flex-col items-center gap-6 px-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[oklch(0.6_0.2_280)] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative flex items-center justify-center gap-3 bg-background border border-white/10 px-8 py-4 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-default shadow-2xl">
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight">Lançamento em breve</span>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center max-w-[280px] md:max-w-none">
                Desenvolvido para lojistas que precisam controlar o negócio além do faturamento.
              </span>
            </div>
          </motion.div>
        </section>

        {/* Transformation Section (Pain Points) */}
        <section className="w-full bg-white/[0.02] border-y border-white/5 py-24 md:py-40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 font-heading">
                Sua loja vende.<br />
                <span className="text-white/40 italic">Mas você realmente sabe:</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "quanto sobrou no caixa?",
                  "quanto está preso em estoque?",
                  "quais vendas deram lucro real?",
                  "quanto capital ainda não voltou?",
                  "quais aparelhos estão parados?"
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg md:text-xl font-medium text-white/80"
                  >
                    <AlertCircle className="w-5 h-5 text-primary shrink-0" />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative bg-card border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
                <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6 font-heading">
                  A Vendly transforma operação desorganizada em <span className="text-primary">clareza financeira e controle real</span> da loja.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                  <div className="w-12 h-[1px] bg-primary/30" />
                  Próxima geração de ERP
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Pillars */}
        <Pillars />

        {/* Features Grid */}
        <section className="w-full max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32 md:mb-48">
          {cards.map((card, index) => (
            <ValueCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              delay={0.1 + index * 0.1}
            />
          ))}
        </section>

        {/* Institutional Section */}
        <section className="w-full max-w-4xl px-6 py-24 md:py-32 text-center border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10 font-heading">
              Feito para a operação real de lojas de celulares.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-12">
              A Vendly foi construída pensando nos problemas que lojistas enfrentam todos os dias:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                "estoque desorganizado",
                "caixa confuso",
                "capital parado",
                "margem imprevisível",
                "operação espalhada entre planilhas e WhatsApp"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0" />
                  <span className="text-sm font-medium text-white/90">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Closing Section */}
        <section className="w-full py-24 md:py-40 flex flex-col items-center text-center bg-gradient-to-b from-transparent to-primary/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 mb-16"
          >
            <span className="text-5xl md:text-8xl font-black tracking-tighter text-white font-heading">Mais controle.</span>
            <span className="text-5xl md:text-8xl font-black tracking-tighter text-primary font-heading">Mais clareza.</span>
            <span className="text-5xl md:text-8xl font-black tracking-tighter text-white/40 font-heading">Menos achismo.</span>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <Logo size="md" />
            <p className="text-white/60 font-bold uppercase tracking-[0.3em] text-xs">
              Sistema operacional para lojas de celulares.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl px-6 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-muted-foreground text-sm font-medium">
          © 2026 Vendly. Todos os direitos reservados.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
          <span className="hover:text-primary cursor-pointer transition-colors">Sistema operacional</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Alta performance</span>
        </div>
      </footer>

      {/* CSS Animation for Gradient Text */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
