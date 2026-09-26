import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "./content";

export function Brand() {
  return <Image src="/brand/logo.webp" width={180} height={40} alt="Vendly" className="brand-logo" />;
}

export function ContactLink({ children = site.cta, className = "", location = "section" }: { children?: ReactNode; className?: string; location?: string }) {
  return <a className={`button button-primary ${className}`} href={site.contact} target="_blank" rel="noopener noreferrer" data-event="contact_cta_clicked" data-location={location}>{children}<ArrowRight size={18} aria-hidden="true" /><span className="sr-only"> (abre o WhatsApp em uma nova aba)</span></a>;
}

export function SectionHeading({ eyebrow, title, children, centered = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; centered?: boolean }) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export function ProductFrame({ type = "dashboard", priority = false }: { type?: "dashboard" | "storefront"; priority?: boolean }) {
  return <div className="product-frame"><div className="browser-bar" aria-hidden="true"><span /><span /><span /><b>{type === "dashboard" ? "painel.vendlyapp.com.br" : "Sua vitrine digital"}</b></div><Image src={`/product/${type}.webp`} alt={type === "dashboard" ? "Tela real do Vendly: vendas, lucro, estoque e pendências em um só painel. Dados de demonstração." : "Vitrine real do Vendly com aparelhos, acessórios, filtros e condições. Dados de demonstração."} width={1440} height={960} sizes="(max-width: 800px) 94vw, 760px" preload={priority} className="product-screen" /></div>;
}

export function WhatsAppNote() { return <span className="whatsapp-note"><MessageCircle size={14} aria-hidden="true" /> Converse com a equipe pelo WhatsApp</span>; }
