import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Compass, ShieldCheck, MoveUpRight, Instagram, MapPin, MessageCircle } from "lucide-react";
import VehicleCard from "@/components/vehicle-card";
import { vehicles, instagramUrl, whatsappUrl, dealershipAddress, mapsUrl } from "@/lib/vehicles";

export default function Home() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 3);
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true"/>
        <div className="hero-grain" aria-hidden="true"/>
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="hero-topline"><span className="line-short" /><span>FRED MOTORS — SANTA CRUZ DO SUL</span></div>
            <p className="hero-pretitle">THE ART OF DRIVING</p>
            <h1>Alguns carros<br/>vão além do <em>comum.</em></h1>
            <p className="hero-description">Para quem não procura apenas um veículo, mas a sensação de ter feito a escolha certa.</p>
            <div className="hero-buttons">
              <Link className="button-primary" href="/estoque">Explorar coleção <ArrowUpRight size={18}/></Link>
              <a className="button-ghost" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Atendimento exclusivo <ArrowUpRight size={17}/></a>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#colecao" className="hero-scroll"><span className="scroll-square"><ArrowDown size={17}/></span> DESLIZE PARA EXPLORAR</a>
            <div className="hero-index"><span>01</span> <span className="hero-index-line" /> <span>THE COLLECTION</span></div>
          </div>
        </div>
        <span className="hero-photo-notice">Imagem editorial ilustrativa</span>
        <span className="hero-vertical">AUTOMOTIVE · PREMIUM · EXPERIENCE</span>
      </section>

      <section className="brand-ticker" aria-label="Marcas em destaque">
        <div className="container brand-ticker-inner">
          <span>UMA COLEÇÃO PARA QUEM RECONHECE O EXTRAORDINÁRIO</span>
          <div className="ticker-brands"><span>BMW</span><i/><span>VOLVO</span><i/><span>AUDI</span><i/><span>MERCEDES-BENZ</span></div>
        </div>
      </section>

      <section className="collection-section section-padding" id="colecao">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow accent">01 / NOSSA SELEÇÃO</span>
              <h2>Escolhas que <em>inspiram.</em></h2>
            </div>
            <div className="section-heading-aside">
              <p>Uma vitrine pensada para destacar design, tecnologia e personalidade. Descubra alguns dos veículos anunciados.</p>
              <Link href="/estoque" className="text-link">Ver coleção completa <ArrowUpRight size={17}/></Link>
            </div>
          </div>
          <div className="vehicle-grid featured-grid">{featured.map((vehicle,i)=><VehicleCard vehicle={vehicle} index={i} key={vehicle.slug}/>)}</div>
          <p className="disclaimer">Anúncios consultados em 16/11/2026; preços e disponibilidade sujeitos a confirmação. Imagens ilustrativas.</p>
          <div className="collection-bottom"><span>EXCLUSIVIDADE NÃO SE EXPLICA. SE SENTE.</span><Link href="/estoque" className="round-link" aria-label="Ver todos os veículos"><ArrowUpRight size={22}/></Link></div>
        </div>
      </section>

      <section className="essence-section" id="essencia">
        <div className="essence-image">
          <div className="essence-image-caption"><span>THE FRED MOTORS EXPERIENCE</span><span>EST. 2025</span></div>
          <span className="essence-photo-notice">Imagem editorial ilustrativa</span>
        </div>
        <div className="essence-content">
          <span className="eyebrow accent">02 / A ESSÊNCIA</span>
          <h2>O luxo está<br/>nos <em>detalhes.</em></h2>
          <div className="essence-line"/>
          <p>Escolher um carro especial é uma decisão que envolve mais do que números. Envolve história, identidade e o prazer de dirigir algo que combina com você.</p>
          <p>Na Fred Motors, a experiência começa muito antes de você girar a chave.</p>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="dark-link">Conheça nosso atendimento <ArrowUpRight size={18}/></a>
          <div className="essence-watermark">F / M</div>
        </div>
      </section>

      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-top">
            <div><span className="eyebrow accent">03 / NOSSO JEITO DE SER</span><h2>Uma experiência à<br/>altura das suas <em>expectativas.</em></h2></div>
            <span className="experience-side-label">DRIVEN BY EXCELLENCE</span>
          </div>
          <div className="experience-grid">
            <div className="experience-item"><div className="experience-icon"><Compass size={29} strokeWidth={1.15}/></div><span>01</span><h3>Seleção com propósito</h3><p>Uma apresentação cuidadosa dos modelos e das características que fazem cada escolha especial.</p><ArrowRight size={19}/></div>
            <div className="experience-item"><div className="experience-icon"><BadgeCheck size={29} strokeWidth={1.15}/></div><span>02</span><h3>Atendimento próximo</h3><p>Uma conversa direta para entender seus desejos, seu momento e o tipo de veículo ideal para você.</p><ArrowRight size={19}/></div>
            <div className="experience-item"><div className="experience-icon"><ShieldCheck size={29} strokeWidth={1.15}/></div><span>03</span><h3>Decisão com confiança</h3><p>Informações claras e espaço para avaliar cada detalhe antes de seguir com a negociação.</p><ArrowRight size={19}/></div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-photo" aria-hidden="true"/>
        <div className="quote-shade" aria-hidden="true"/>
        <div className="container quote-inner"><p className="eyebrow">FRED MOTORS / SIGNATURE</p><h2>Não é sobre chegar.<br/>É sobre <em>como você chega.</em></h2><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="button-outline">Acompanhe nossa história <Instagram size={18}/></a></div>
        <span className="quote-photo-notice">Imagem editorial ilustrativa</span>
      </section>

      <section className="contact-section section-padding" id="contato">
        <div className="container contact-layout">
          <div className="contact-main"><span className="eyebrow accent">04 / ENTRE EM CONTATO</span><h2>Seu próximo capítulo<br/>começa com uma <em>conversa.</em></h2><p>Fale com nossa equipe e descubra os detalhes dos veículos disponíveis.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="button-primary contact-cta">Conversar pelo WhatsApp <ArrowUpRight size={19}/></a></div>
          <div className="contact-details">
            <div className="contact-detail"><MessageCircle size={22} strokeWidth={1.3}/><div><span>ATENDIMENTO</span><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">(51) 99863-1212 <MoveUpRight size={15}/></a></div></div>
            <div className="contact-detail"><MapPin size={22} strokeWidth={1.3}/><div><span>VISITE A FRED MOTORS</span><p>{dealershipAddress}</p><a className="contact-small-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir rota <ArrowUpRight size={15}/></a></div></div>
            <div className="contact-detail"><Instagram size={22} strokeWidth={1.3}/><div><span>NO INSTAGRAM</span><a href={instagramUrl} target="_blank" rel="noopener noreferrer">@fredmotorss <ArrowUpRight size={15}/></a></div></div>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><span className="footer-logotype">FRED <span>MOTORS</span></span><p>Automóveis selecionados.<br/>Experiências que permanecem.</p></div><div className="footer-links"><Link href="/">Início</Link><Link href="/estoque">Coleção</Link><Link href="/#essencia">Nossa essência</Link><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FRED MOTORS. TODOS OS DIREITOS RESERVADOS.</span><span>SANTA CRUZ DO SUL · RS · BRASIL</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
    </main>
  );
}