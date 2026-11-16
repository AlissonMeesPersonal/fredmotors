import type { Metadata } from "next";
import "@/app/globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import WhatsappFab from "@/components/whatsapp-fab";

export const metadata: Metadata = {
  title: { default: "Fred Motors | Beyond Ordinary", template: "%s | Fred Motors" },
  description: "Fred Motors. Uma experiência digital imersiva e uma coleção de automóveis selecionados em Santa Cruz do Sul, RS.",
  keywords: ["Fred Motors", "Fred Motors Santa Cruz do Sul", "veículos premium", "automóveis selecionados"],
  openGraph: {
    title: "Fred Motors — Beyond Ordinary",
    description: "O desejo tem nova forma. Descubra a Fred Motors.",
    type: "website",
    locale: "pt_BR"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteHeader />{children}<SiteFooter/><WhatsappFab /></body></html>;
}