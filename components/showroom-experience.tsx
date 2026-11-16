"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

const ConceptCar3D = dynamic(() => import("@/components/concept-car-3d"), {
  ssr: false,
  loading: () => <div className="showroom-loading"><span className="loading-orbit" /><span>INITIALIZING EXPERIENCE</span></div>
});

const chapters = [
  {
    number: "01", eyebrow: "CAPÍTULO I — A CHEGADA",
    lines: ["O DESEJO", "TEM NOVA", "FORMA."],
    description: "Automóveis extraordinários. Uma experiência que começa antes mesmo de girar a chave.",
    side: "FIRST IMPRESSION",
    status: "EXPLORAR A EXPERIÊNCIA"
  },
  {
    number: "02", eyebrow: "CAPÍTULO II — O MOVIMENTO",
    lines: ["NÃO É", "APENAS", "DIRIGIR."],
    description: "É sentir a precisão. Reconhecer a potência. Encontrar sua próxima grande escolha.",
    side: "ENGINEERED EMOTION",
    status: "OBSERVE AS LINHAS"
  },
  {
    number: "03", eyebrow: "CAPÍTULO III — O DETALHE",
    lines: ["CADA CURVA.", "UMA", "ASSINATURA."],
    description: "Há máquinas que passam. E há máquinas que deixam uma marca.",
    side: "DESIGNED TO FEEL",
    status: "DESCUBRA OUTRO ÂNGULO"
  },
  {
    number: "04", eyebrow: "CAPÍTULO IV — O DESTINO",
    lines: ["SEU PRÓXIMO", "ÍCONE ESTÁ", "AQUI."],
    description: "Sua próxima história ao volante começa com uma conversa.",
    side: "THE NEXT CHAPTER",
    status: "CONTINUE PARA A COLEÇÃO"
  }
];

export default function ShowroomExperience() {
  const trackRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const pointerRef = useRef<[number, number]>([0, 0]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [chapter, setChapter] = useState(0);
  const [canUse3D, setCanUse3D] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const measure = useCallback(() => {
    const element = trackRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const distance = Math.max(1, element.offsetHeight - window.innerHeight);
    const p = Math.max(0, Math.min(1, -bounds.top / distance));
    progressRef.current = p;
    const index = reducedMotion ? 0 : Math.min(3, Math.floor(p * 3.99));
    setChapter((previous) => previous === index ? previous : index);
    if (progressBarRef.current) progressBarRef.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
  }, [reducedMotion]);

  useEffect(() => {
    let supported = false;
    try {
      const canvas = document.createElement("canvas");
      supported = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch { supported = false; }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    setCanUse3D(supported && !media.matches);
    const mediaChange = () => {
      setReducedMotion(media.matches);
      setCanUse3D(supported && !media.matches);
    };
    media.addEventListener("change", mediaChange);
    return () => media.removeEventListener("change", mediaChange);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goToChapter = (index: number) => {
    const element = trackRef.current;
    if (!element) return;
    const distance = Math.max(0, element.offsetHeight - window.innerHeight);
    const top = window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top: top + distance * (index / 3.98), behavior: reducedMotion ? "auto" : "smooth" });
  };

  const movePointer = (event: PointerEvent<HTMLDivElement>) => {
    pointerRef.current = [
      (event.clientX / Math.max(1, window.innerWidth) - 0.5) * 2,
      (event.clientY / Math.max(1, window.innerHeight) - 0.5) * 2
    ];
  };

  const current = chapters[chapter];
  return (
    <section id="inicio" ref={trackRef} className={"showroom-track" + (reducedMotion ? " showroom-reduced" : "")} aria-label="Showroom conceitual interativo Fred Motors">
      <div className={"showroom-sticky showroom-scene-" + chapter} onPointerMove={movePointer} onPointerLeave={() => { pointerRef.current = [0, 0]; }}>
        <div className="showroom-atmosphere" aria-hidden="true"/>
        <div className="showroom-grille" aria-hidden="true"/>
        <div className="showroom-visual" aria-label="Escultura digital 3D de um carro esportivo conceitual">
          {canUse3D ? <ConceptCar3D progressRef={progressRef} pointerRef={pointerRef}/> : <div className="showroom-static-car" role="img" aria-label="Imagem ilustrativa de um carro esportivo" />}
        </div>
        <div className="showroom-top-cap"><span>FRED MOTORS / DIGITAL ATELIER</span><span>01 — 04 / WORLD OF MOTION</span></div>
        <div className="showroom-narrative" key={chapter}>
          <div className="narrative-eyebrow"><span className="eyebrow-line"/>{current.eyebrow}</div>
          <div className="narrative-title">
            {current.lines.map((line, i) => chapter === 0
              ? <h1 className={i === 2 ? "outline-type" : ""} key={line}>{line}</h1>
              : <h2 className={i === 2 ? "outline-type" : ""} key={line}>{line}</h2>
            )}
          </div>
          <p>{current.description}</p>
          {chapter === 3 ? <Link className="narrative-action" href="/estoque">ENTRAR NA COLEÇÃO <MoveUpRight size={19}/></Link>
            : <span className="narrative-caption"><span className="tiny-square"/> {current.status}</span>}
        </div>
        <div className="scene-aside-rail">
          <span className="rail-label">EXPERIENCE / {current.side}</span>
          <div className="rail-dots">
            {chapters.map((scene, index) => (
              <button type="button" key={scene.number} className={chapter === index ? "rail-dot is-active" : "rail-dot"}
                onClick={() => goToChapter(index)} aria-label={"Ir para o capítulo " + scene.number} aria-current={chapter === index ? "step" : undefined}>
                <span/>
              </button>
            ))}
          </div>
        </div>
        <div className="showroom-bottom-cap">
          <span><strong>F/M</strong> CONCEPT 001 <span className="cap-separator"/> VISUALIZAÇÃO DIGITAL ILUSTRATIVA</span>
          <span className="showroom-scroll-hint"><ArrowDown size={16}/> ROLE PARA MOVER</span>
          <span className="chapter-numeral">{current.number} <i/> 04</span>
        </div>
        <div className="story-progress"><div ref={progressBarRef}/></div>
        <Link className="story-exit" href="/estoque" aria-label="Pular experiência e ver estoque">PULAR EXPERIÊNCIA <ArrowUpRight size={13}/></Link>
      </div>
    </section>
  );
}