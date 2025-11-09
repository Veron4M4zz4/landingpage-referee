// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden isolate bg-[#0C0C0C]"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 50% 120%, rgba(0,0,0,0.35), transparent 40%), linear-gradient(180deg, #111111, #0C0C0C)",
      }}
    >
      {/* ===== ÚNICO CÍRCULO ATRÁS DO MOCKUP ===== */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/circle-hero.svg"
          alt=""
          width={1200}
          height={1200}
          // posicione fino conforme o seu Figma
          className="absolute left-[-220px] top-[-160px] opacity-35"
          priority
        />
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
        {/* ESQUERDA: mockup */}
        <div className="relative flex justify-center md:justify-start">
          <Image
            src="/assets/iphone14.svg"
            alt="Prévia do app"
            width={520}
            height={520}
            className="-rotate-6 drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>

        {/* DIREITA: texto/CTAs */}
        <div className="space-y-6 text-left">
          <p className="uppercase tracking-[0.25em] text-[11px] text-slate-400">
            DISPONÍVEL EM BREVE
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            SEM DOR DE CABEÇA,<br />DEIXA COM A GENTE!
          </h1>

          <p className="text-slate-300 leading-relaxed">
            Árbitros disponíveis para apitar em Salvador, Bahia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium bg-[#F6C20E] text-black hover:bg-[#C79C0B] shadow"
            >
              🍎 App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium bg-[#F6C20E] text-black hover:bg-[#C79C0B] shadow"
            >
              ▶ Google Play
            </a>
          </div>

          <div className="text-xs text-slate-500">
            *Links das lojas serão publicados no lançamento.
          </div>
        </div>
      </div>
    </section>
  );
}
