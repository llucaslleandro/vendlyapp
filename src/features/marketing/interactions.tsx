"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Expand, Menu, X } from "lucide-react";
import { demos, site } from "./content";

// Integration point only: no cookies, SDK, identifiers or network collection.
export function emitMarketingEvent(name: string, properties: Record<string, string>) {
  window.dispatchEvent(new CustomEvent("vendly:marketing", { detail: { name, ...properties } }));
}

export function MarketingEvents() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-event]") : null;
      if (link?.dataset.event) emitMarketingEvent(link.dataset.event, { location: link.dataset.location ?? "section" });
    };
    const toggle = (event: Event) => {
      if (event.target instanceof HTMLDetailsElement && event.target.open && event.target.dataset.faq) emitMarketingEvent("faq_opened", { question: event.target.dataset.faq });
    };
    document.addEventListener("click", click);
    document.addEventListener("toggle", toggle, true);
    const pricing = document.getElementById("planos");
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { emitMarketingEvent("pricing_viewed", { section: "genesis" }); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (pricing) observer.observe(pricing);
    return () => { document.removeEventListener("click", click); document.removeEventListener("toggle", toggle, true); observer.disconnect(); };
  }, []);
  return null;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false); };
    document.addEventListener("keydown", close); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <div className="mobile-navigation" ref={root}><button ref={button} className="icon-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav id="mobile-menu" aria-label="Navegação mobile" hidden={!open} onClick={e => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}><a href="#plataforma">A plataforma</a><a href="#vitrine">Vitrine digital</a><a href="#planos">Como começar</a><a href="#duvidas">Dúvidas</a><a href={site.login}>Entrar no painel <ArrowRight size={16} /></a></nav></div>;
}

export function ProductDemo() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const demo = demos[selected];
  return <div className="demo">
    <div className="demo-tabs" role="group" aria-label="Escolha a demonstração">
      {demos.map((item, i) => <button key={item.id} type="button" aria-pressed={selected === i} aria-controls="demo-screen" onClick={() => { setSelected(i); emitMarketingEvent("feature_demo_selected", { demo: item.id }); }}>{item.label}<ArrowRight size={16} aria-hidden="true" /></button>)}
    </div>
    <div id="demo-screen" className="demo-content">
      <div className="demo-description" aria-live="polite"><h3>{demo.title}</h3><p>{demo.text}</p></div>
      <div className="product-frame"><div className="browser-bar" aria-hidden="true"><span /><span /><span /><b>Vendly · {demo.label}</b></div><Image key={demo.id} src={demo.image} alt={demo.alt} width={1440} height={960} sizes="(max-width: 800px) 94vw, 1120px" /></div>
    </div>
    <div className="demo-footer"><p className="demo-caption">Telas do produto com dados de demonstração. Valores ilustrativos.</p><button className="text-link" type="button" onClick={() => dialog.current?.showModal()}><Expand size={16} aria-hidden="true" /> Ampliar tela</button></div>
    <dialog ref={dialog} className="screen-dialog" aria-labelledby="screen-dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="screen-dialog-header"><div><h3 id="screen-dialog-title">{demo.label}</h3><p>Dados de demonstração · deslize para explorar a tela</p></div><button className="icon-button" aria-label="Fechar demonstração" onClick={() => dialog.current?.close()}><X /></button></div>
      <div className="screen-dialog-scroll" tabIndex={0} role="region" aria-label="Tela ampliada do produto"><Image src={demo.image} alt={demo.alt} width={1440} height={960} /></div>
    </dialog>
  </div>;
}
