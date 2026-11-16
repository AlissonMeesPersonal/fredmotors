import type { Metadata } from "next";
import "@/app/globals.css";
import SiteHeader from "@/components/site-header";
import WhatsappFab from "@/components/whatsapp-fab";

export const metadata: Metadata = {
  title: { default: "Fred Motors | Automóveis Selecionados", template: "%s | Fred Motors" },
  description: "Fred Motors — uma curadoria de veículos premium em Santa Cruz do Sul, RS. Descubra a coleção e fale com um consultor.",
  keywords: ["Fred Motors", "veículos premium", "Santa Cruz do Sul", "BMW", "Volvo", "carros de luxo"],
  openGraph: {
    title: "Fred Motors — Automóveis Selecionados",
    description: "Mais do que dirigir. Escolher o extraordinário.",
    type: "website",
    locale: "pt_BR"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteHeader />{children}<WhatsappFab /></body></html>;
}