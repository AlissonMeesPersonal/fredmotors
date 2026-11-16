import type { Metadata } from "next";
import InventoryExplorer from "@/components/inventory-explorer";
import Link from "next/link";
import { ArrowLeft, ArrowDownRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coleção — Automóveis Selecionados",
  description: "Uma coleção de veículos premium Fred Motors. Explore modelos e consulte a disponibilidade com nossa equipe."
};

export default function InventoryPage() {
  return <main className="inventory-page" id="inicio">
    <section className="catalog-hero">
      <Link className="back-breadcrumb" href="/"><ArrowLeft size={16}/> VOLTAR À EXPERIÊNCIA</Link>
      <div className="catalog-head">
        <div><span className="mini-label signal-text">FRED MOTORS / THE CAR COLLECTION</span><h1>A NOSSA<br/><span>COLEÇÃO.</span></h1></div>
        <div className="catalog-side"><span>NO ORDINARY MACHINES.</span><p>Um lugar para descobrir o próximo veículo que combina com quem você é.</p><ArrowDownRight size={33} strokeWidth={1.4}/></div>
      </div>
      <div className="catalog-hero-bottom"><span>001 — SHOWROOM DIGITAL</span><span>EXPLORE. ENCONTRE. CONECTE-SE.</span></div>
    </section>
    <section className="inventory-section"><InventoryExplorer/></section>
  </main>;
}