import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/vehicles";

export default function WhatsappFab() {
  return <a className="whatsapp-fab" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Fred Motors pelo WhatsApp"><MessageCircle size={23} strokeWidth={1.7}/><span>Concierge</span></a>;
}