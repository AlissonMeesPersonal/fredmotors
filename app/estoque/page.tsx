import type { Metadata } from "next";
import InventoryExplorer from "@/components/inventory-explorer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Coleção de veículos",
  description: "Conheça a seleção premium de automóveis anunciados pela Fred Motors em Santa Cruz do Sul."
};

export default function InventoryPage() {
  return <main className="inventory-page"><section className="interior-hero"><div className="container"><Link className="back-breadcrumb" href="/"><ArrowLeft size={15}/> Página inicial</Link><span className="eyebrow accent">THE COLLECTION / FRED MOTORS</span><h1>Encontre o seu<br/><em>extraordinário.</em></h1><p>Explore a coleção e descubra o modelo que traduz o seu estilo.</p></div><span className="interior-hero-outline">SELECTED AUTOMOBILES</span></section><section className="inventory-section container"><InventoryExplorer/></section></main>;
}