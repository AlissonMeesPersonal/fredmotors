import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight, Instagram, MapPin, MoveRight } from "lucide-react";
import ShowroomExperience from "@/components/showroom-experience";
import { dealershipAddress, instagramUrl, mapsUrl, vehicles, whatsappUrl, formatCurrency } from "@/lib/vehicles";

export default function Home() {
  const picks = vehicles.filter(vehicle => vehicle.featured).slice(0, 3);
  const [heroCar, ...otherCars] = picks;

  return <main className="atelier-home">
    <ShowroomExperience />

    <section className="manifesto-section" id="essencia">
      <div className="manifesto-meta"><span>01 / BRAND MANIFESTO</span><span>NOT FOR EVERYONE. FOR THE RIGHT ONE.</span></div>
      <div className="manifesto-heading-row">
        <div className="manifesto-left-tag"><span className="tag-star">✳</span><span>O QUE NOS MOVE</span></div>
        <h2>O COMUM<br/>NUNCA FOI<br/><span>UMA OPÇÃO<span className="manifesto-period">.</span></span></h2>
      </div>
      <div className="manifesto-bottom">
        <div className="manifesto-stamp"><span>F / M</span><small>CURATED TO MOVE YOU.</small></div>
        <p>Para quem enxerga além da ficha técnica. Para quem valoriza presença, personalidade e aquele instante em que um carro deixa de ser apenas um carro.</p>
        <Link href="/estoque" className="arrow-circle-link" aria-label="Explorar veículos"><ArrowUpRight size={26}/></Link>
      </div>
      <div className="manifesto-runner">FRED MOTORS <span>↗</span> BEYOND ORDINARY <span>↗</span> FRED MOTORS</div>
    </section>

    <section className="gallery-section" id="colecao">
      <div className="gallery-strap"><span>02 / GARAGEM EM DESTAQUE</span><span>CURATED MACHINES — SANTA CRUZ DO SUL</span></div>
      <div className="gallery-head">
        <div><span className="mini-label signal-text">EDITOR&apos;S SELECTION / 001—003</span><h2>NÃO É<br/>UM ESTOQUE.<br/><em>É UM ELENCO.</em></h2></div>
        <div className="gallery-head-aside"><p>Peças que se destacam por estilo, proposta e presença. Conheça a seleção anunciada pela Fred Motors.</p><Link href="/estoque" className="inline-arrow-link">EXPLORAR TODA A COLEÇÃO <ArrowUpRight size={18}/></Link></div>
      </div>
      <div className="gallery-showcase">
        {heroCar && <Link href={"/veiculos/" + heroCar.slug} className="gallery-card gallery-card-main">
          <div className="gallery-image" style={{backgroundImage:'url("' + heroCar.image + '")'}} role="img" aria-label={heroCar.imageAlt}/>
          <div className="gallery-card-shade"/>
          <div className="gallery-card-corners"><span>F/M — Nº 001</span><span>DESIGN / PERFORMANCE</span></div>
          <span className="gallery-card-go"><ArrowUpRight size={24}/></span>
          <div className="gallery-card-copy"><span>{heroCar.brand} / {heroCar.year}</span><h3>{heroCar.model}</h3><p>{heroCar.version}</p><strong>{formatCurrency(heroCar.price)}</strong></div>
          <span className="illustrative-note">Imagem ilustrativa</span>
        </Link>}
        <div className="gallery-side">
          {otherCars.map((vehicle, index) => <Link href={"/veiculos/" + vehicle.slug} className="gallery-card gallery-card-small" key={vehicle.slug}>
            <div className="gallery-image" style={{backgroundImage:'url("' + vehicle.image + '")'}} role="img" aria-label={vehicle.imageAlt}/>
            <div className="gallery-card-shade"/>
            <div className="gallery-card-corners"><span>F/M — Nº 00{index+2}</span><span>{vehicle.category.toUpperCase()}</span></div>
            <span className="gallery-card-go"><ArrowUpRight size={21}/></span>
            <div className="gallery-card-copy"><span>{vehicle.brand} / {vehicle.year}</span><h3>{vehicle.model}</h3><strong>{formatCurrency(vehicle.price)}</strong></div>
            <span className="illustrative-note">Imagem ilustrativa</span>
          </Link>)}
        </div>
      </div>
      <div className="gallery-footer"><span>Dados de anúncios públicos; confirme estoque e preços com a loja. Fotos ilustrativas.</span><Link href="/estoque">VER TODOS OS CARROS <MoveRight size={20}/></Link></div>
    </section>

    <section className="velocity-band" aria-label="Assinatura da Fred Motors"><div>DRIVEN BY <span>OBSESSION.</span> DRIVEN BY <span>OBSESSION.</span></div></section>

    <section className="chapter-section">
      <div className="chapter-image"><div className="chapter-image-content"><span>FRED / MOTOR CULTURE</span><span className="chapter-image-mark">FM<span>®</span></span><span>DESIGN. PRESENCE. EMOTION.</span></div><span className="illustrative-note">Imagem ilustrativa</span></div>
      <div className="chapter-text"><span className="mini-label signal-text">03 / MAIS QUE UM LUGAR</span><h2>QUEM<br/>ENTENDE,<br/><span>SENTE.</span></h2><p>O primeiro contato pode começar pela tela. Mas a experiência de escolher algo extraordinário é pessoal.</p><p>Venha conhecer a Fred Motors, conversar sobre o que procura e encontrar o próximo capítulo da sua história ao volante.</p><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-arrow-link dark-inline-link">COMO CHEGAR <ArrowUpRight size={20}/></a><span className="chapter-watermark">FRED MOTORS / SC</span></div>
    </section>

    <section className="closing-section" id="contato">
      <div className="closing-topline"><span>04 / O PRÓXIMO CAPÍTULO</span><span>SANTA CRUZ DO SUL — RS</span></div>
      <div className="closing-heading"><span>ESTÁ PRONTO</span><h2>PARA SAIR<br/>DO <em>COMUM?</em></h2></div>
      <div className="closing-actions">
        <a className="closing-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">VAMOS CONVERSAR <MoveUpRight size={29}/></a>
        <div className="closing-aside"><p>Um atendimento à altura da sua próxima escolha.</p><a href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={17}/> @FREDMOTORSS <ArrowUpRight size={15}/></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17}/>{dealershipAddress} <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="closing-footerline"><span>THE NEXT MOVE IS YOURS.</span><ArrowDownRight size={26}/><span>FRED MOTORS © {new Date().getFullYear()}</span></div>
    </section>
  </main>;
}