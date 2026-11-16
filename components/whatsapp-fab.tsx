import { ArrowUpRight, MessageCircleMore } from "lucide-react";
import { whatsappUrl } from "@/lib/vehicles";

export default function WhatsappFab() {
  return <a className="concierge-fab" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp com a Fred Motors">
    <span>FALAR COM CONCIERGE</span><MessageCircleMore size={19}/><ArrowUpRight size={13} className="fab-arrow"/>
  </a>;
}