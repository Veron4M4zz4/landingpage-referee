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
      {/* ===== CÍRCULO ÚNICO ATRÁS DO MOCKUP ===== */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none flex justify-center md:justify-start">
        <Image
          src="/assets/circle-hero.svg"
          alt=""
          width={1000}
          height={1000}
          className="
            absolute
            md:left-[-220px]
            left-1/2 -translate-x-1/2
            md:top-[-160px]
            top-[20px]
            w-[700px] md:w-[1000px]
            opacity-30
          "
          priority
        />
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1280px]
          px-6 py-16 md:py-24
          grid grid-cols-1 md:grid-cols-2
          items-center gap-12
        "
      >
        {/* COLUNA ESQUERDA: MOCKUP */}
        <div className="relative flex justify-center md:justify-start order-1 md:order-none">
          <Image
            src="/assets/iphone14.svg"
            alt="Prévia do app"
            width={480}
            height={480}
            className="
              md:-rotate-6
              w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px]
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]
            "
            priority
          />
        </div>

        {/* COLUNA DIREITA: TEXTO E CTAs */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-none">
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-[11px] text-slate-400">
            DISPONÍVEL EM BREVE
          </p>

          <h1
            className="
              text-white font-extrabold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            "
          >
            SEM DOR DE CABEÇA,
            <br />
            DEIXA COM A GENTE!
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Árbitros disponíveis para apitar em Salvador, Bahia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium bg-[#F6C20E] text-black hover:bg-[#C79C0B] shadow text-sm sm:text-base"
            >
              🍎 App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium bg-[#F6C20E] text-black hover:bg-[#C79C0B] shadow text-sm sm:text-base"
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
