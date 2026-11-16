"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { instagramUrl, whatsappUrl } from "@/lib/vehicles";

function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Fred Motors — página inicial">
      <span className="wordmark-icon" aria-hidden="true">F<span>/</span>M</span>
      <span className="wordmark-title"><strong>FRED</strong><strong>MOTORS</strong></span>
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link className={pathname === "/" ? "active" : ""} href="/">Início</Link>
          <Link className={pathname === "/estoque" ? "active" : ""} href="/estoque">Coleção</Link>
          <Link href="/#essencia">Nossa essência</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <div className="header-actions">
          <a className="header-instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram Fred Motors">IG <ArrowUpRight size={13}/></a>
          <a className="header-cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Fale com um especialista <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Menu móvel">
          <Link href="/" onClick={() => setOpen(false)}>Início</Link>
          <Link href="/estoque" onClick={() => setOpen(false)}>Coleção</Link>
          <Link href="/#essencia" onClick={() => setOpen(false)}>Nossa essência</Link>
          <Link href="/#contato" onClick={() => setOpen(false)}>Contato</Link>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Atendimento exclusivo <ArrowUpRight size={16}/></a>
        </nav>
      )}
    </header>
  );
}