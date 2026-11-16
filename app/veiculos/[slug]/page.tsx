import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Gauge, Fuel, Cog, CheckCircle2, MessageCircle } from "lucide-react";
import VehicleCard from "@/components/vehicle-card";
import { findVehicle, formatCurrency, formatMileage, vehicles, whatsappUrl } from "@/lib/vehicles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = findVehicle(slug);
  if (!car) return { title: "Veículo não encontrado" };
  return { title: car.brand + " " + car.model + " " + car.year, description: "Conheça " + car.brand + " " + car.model + ", " + car.year + ". Consulte a Fred Motors sobre a disponibilidade." };
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;
  const car = findVehicle(slug);
  if (!car) notFound();
  const related = vehicles.filter((v) => v.slug !== car.slug).slice(0, 3);
  const label = car.brand + " " + car.model + " " + car.year;

  return <main className="vehicle-detail-page">
    <section className="detail-top container"><Link className="back-breadcrumb" href="/estoque"><ArrowLeft size={16}/> Voltar à coleção</Link><div className="detail-head"><div><span className="eyebrow accent">{car.brand} / SELECTED COLLECTION</span><h1>{car.model}</h1><p>{car.version}</p></div><div className="detail-price-box"><span>VALOR ANUNCIADO</span><strong>{formatCurrency(car.price)}</strong></div></div></section>
    <section className="detail-visual"><div className="detail-photo" style={{ backgroundImage: 'url("' + car.image + '")' }} role="img" aria-label={car.imageAlt}/><span className="detail-image-note">Imagem ilustrativa — não representa o exemplar à venda</span></section>
    <section className="detail-content container"><div className="detail-specs"><span className="eyebrow accent">DADOS DO ANÚNCIO</span><h2>Essência em<br/><em>cada detalhe.</em></h2><div className="spec-grid"><div><CalendarDays size={21}/><span>ANO</span><strong>{car.year}</strong></div><div><Gauge size={21}/><span>QUILOMETRAGEM</span><strong>{formatMileage(car.mileage)}</strong></div><div><Fuel size={21}/><span>COMBUSTÍVEL</span><strong>{car.fuel}</strong></div><div><Cog size={21}/><span>TRANSMISSÃO</span><strong>{car.transmission}</strong></div></div><p className="disclaimer">Valores e informações reproduzidos de anúncios públicos consultados em 16/11/2026. Confirmar ano, quilometragem, preço e disponibilidade diretamente com a loja. Imagens usadas apenas como referência editorial.</p></div><aside className="detail-contact-card"><span className="eyebrow accent">ATENDIMENTO FRED MOTORS</span><h3>Este pode ser<br/>o seu próximo carro.</h3><p>Fale com a equipe e solicite fotos reais, histórico, disponibilidade e condições de negociação.</p><a className="button-primary" href={whatsappUrl(label)} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> Consultar pelo WhatsApp <ArrowUpRight size={18}/></a><p className="detail-assurance"><CheckCircle2 size={15}/> Atendimento direto com a loja</p></aside></section>
    <section className="detail-related section-padding"><div className="container"><div className="section-heading"><div><span className="eyebrow accent">CONTINUE EXPLORANDO</span><h2>Outras <em>escolhas.</em></h2></div><Link href="/estoque" className="text-link">Coleção completa <ArrowUpRight size={17}/></Link></div><div className="vehicle-grid">{related.map((v,i)=><VehicleCard vehicle={v} index={i} key={v.slug}/>)}</div></div></section>
  </main>;
}