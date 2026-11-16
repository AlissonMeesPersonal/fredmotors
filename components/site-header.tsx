"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/vehicles";

const links = [
  { href: "/", label: "O início", number: "01" },
  { href: "/estoque", label: "A coleção", number: "02" },
  { href: "/#essencia", label: "Manifesto", number: "03" },
  { href: "/#contato", label: "Contato", number: "04" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={"atlas-header" + (scrolled || open ? " is-scrolled" : "") + (open ? " menu-open" : "")}>
        <div className="atlas-header-inner">
          <Link href="/" className="atlas-logo" aria-label="Fred Motors — início" onClick={() => setOpen(false)}>
            <span className="atlas-symbol">F<span>/</span>M</span>
            <span className="atlas-logo-name">FRED<span>MOTORS</span></span>
          </Link>
          <span className="atlas-header-center"><i/> INDEPENDENT AUTOMOTIVE ATELIER <i/></span>
          <div className="atlas-controls">
            <a className="atlas-contact" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">FALAR COM UM CONCIERGE <ArrowUpRight size={16}/></a>
            <button className="atlas-menu-button" type="button" aria-label={open ? "Fechar navegação" : "Abrir navegação"} aria-expanded={open} aria-controls="atlas-mega-menu" onClick={() => setOpen(v => !v)}>
              <span>{open ? "FECHAR" : "MENU"}</span>{open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </header>
      <div id="atlas-mega-menu" className={"atlas-menu-overlay" + (open ? " is-open" : "")} inert={!open} aria-hidden={!open}>
        <div className="atlas-menu-grid">
          <div className="atlas-menu-heading"><span className="mini-label">THE FRED MOTORS EXPERIENCE</span><p>ESCOLHA SEU<br/>PRÓXIMO MOVIMENTO.</p></div>
          <nav aria-label="Navegação principal" className="atlas-mega-nav">
            {links.map(link => <Link key={link.number} href={link.href} onClick={() => setOpen(false)}><span>{link.number}</span>{link.label}<ArrowUpRight size={24}/></Link>)}
          </nav>
        </div>
        <div className="atlas-menu-bottom"><span>FRED MOTORS / SANTA CRUZ DO SUL</span><span>BEYOND THE ORDINARY ™</span></div>
      </div>
    </>
  );
}