import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dealershipAddress, instagramUrl, whatsappUrl } from "@/lib/vehicles";

export default function SiteFooter() {
  return <footer className="atlas-footer">
    <div className="atlas-footer-top">
      <div><span className="mini-label">FRED MOTORS — MOTOR CULTURE</span><h2>Mais do que<br/><em>automóveis.</em></h2></div>
      <div className="atlas-footer-side"><p>Um novo jeito de se conectar com o extraordinário.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">INICIAR CONVERSA <ArrowUpRight size={18}/></a></div>
    </div>
    <div className="atlas-footer-columns">
      <div className="atlas-footer-wordmark">FRED<span>MOTORS.</span></div>
      <div className="atlas-footer-nav"><span className="mini-label">EXPLORAR</span><Link href="/">Início</Link><Link href="/estoque">Veículos</Link><Link href="/#essencia">Manifesto</Link></div>
      <div className="atlas-footer-nav"><span className="mini-label">CONEXÕES</span><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><p>{dealershipAddress}</p></div>
    </div>
    <div className="atlas-footer-legal"><span>© {new Date().getFullYear()} FRED MOTORS.</span><span>INDEPENDENT BY NATURE.</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div>
  </footer>;
}