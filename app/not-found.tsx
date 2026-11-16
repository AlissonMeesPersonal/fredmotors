import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){
  return <main className="not-found container"><p className="eyebrow accent">404 / NÃO ENCONTRADO</p><h1>Nem toda estrada leva ao destino esperado.</h1><p>A página que você procura não está disponível.</p><Link className="button-primary" href="/"><ArrowLeft size={17}/> Voltar ao início</Link></main>;
}