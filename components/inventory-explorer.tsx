"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ArrowDownUp, X } from "lucide-react";
import VehicleCard from "@/components/vehicle-card";
import { vehicles } from "@/lib/vehicles";

export default function InventoryExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sort, setSort] = useState("featured");

  const results = useMemo(() => {
    const normalized = search.trim().toLocaleLowerCase("pt-BR");
    const filtered = vehicles.filter((car) => {
      const matchesCategory = category === "Todos" || car.category === category;
      const matchesSearch = (car.brand + " " + car.model + " " + car.version + " " + car.year).toLocaleLowerCase("pt-BR").includes(normalized);
      return matchesCategory && matchesSearch;
    });
    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "year-desc") return b.year - a.year;
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [search, category, sort]);

  return (
    <div className="inventory-app">
      <div className="inventory-toolbar">
        <label className="inventory-search"><Search size={19}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Marca, modelo ou versão..." aria-label="Pesquisar veículos" />{search && <button onClick={() => setSearch("")} aria-label="Limpar busca"><X size={16}/></button>}</label>
        <div className="inventory-sort"><ArrowDownUp size={17}/><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Ordenar veículos"><option value="featured">Destaques</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option><option value="year-desc">Mais recentes</option></select></div>
      </div>
      <div className="inventory-categories">
        <span className="filter-label"><SlidersHorizontal size={15}/> Filtrar por</span>
        {["Todos", "SUV", "Sedã", "Picape", "Off-road"].map((item) => <button key={item} type="button" className={category === item ? "category-button selected" : "category-button"} onClick={() => setCategory(item)}>{item}</button>)}
        <span className="results-count">{results.length} {results.length === 1 ? "veículo" : "veículos"}</span>
      </div>
      {results.length ? <div className="vehicle-grid">{results.map((car, i) => <VehicleCard key={car.slug} vehicle={car} index={i}/>)}</div> : <div className="empty-results"><h3>Nenhum veículo encontrado.</h3><p>Tente buscar por outro modelo ou limpe os filtros.</p><button type="button" onClick={() => {setCategory("Todos");setSearch("");}}>Limpar filtros</button></div>}
      <p className="disclaimer centered">Valores e dados baseados em anúncios públicos consultados em 16/11/2026. Confirme informações e disponibilidade com a Fred Motors. Fotos de referência, não dos exemplares anunciados.</p>
    </div>
  );
}