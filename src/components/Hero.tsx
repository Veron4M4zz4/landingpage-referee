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
      {/* layer de luz leve (opcional) */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_40%_50%,rgba(255,255,255,0.04),transparent)]" />
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1280px]
          px-6 py-16 md:py-24
          grid grid-cols-1 md:grid-cols-2
          items-center gap-12
        "
      >
        {/* COLUNA ESQUERDA: MOCKUP + CÍRCULOS ANCORADOS NO MOCKUP */}
        <div className="relative flex justify-center md:justify-start order-1 md:order-none">
          {/* CÍRCULO atrás do mockup */}
          <Image
            src="/assets/circle-hero.svg"
            alt=""
            width={1800}
            height={1800}
            priority
            className={`
              pointer-events-none select-none
              absolute -z-10
              left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              opacity-30
              w-[820px] sm:w-[980px]
              md:w-[1200px] lg:w-[1400px] xl:w-[1600px] 2xl:w-[1750px]
              md:top-[56%] md:left-[53%]
              lg:top-[57%] lg:left-[54%]
              xl:top-[58%] xl:left-[55%]
              2xl:top-[59%] 2xl:left-[55.5%]
            `}
          />

          {/* MOCKUP */}
          <Image
            src="/assets/iphone14.svg"
            alt="Prévia do app"
            width={520}
            height={520}
            priority
            className="
              md:-rotate-6
              w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px]
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]
              relative z-10
            "
          />
        </div>

        {/* COLUNA DIREITA: TEXTO E CTAs */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-none">
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-[11px] text-slate-400">
            DISPONÍVEL EM BREVE
          </p>

          <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            SEM DOR DE CABEÇA,
            <br />
            DEIXA COM A GENTE!
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Árbitros disponíveis para apitar em Salvador, Bahia.
          </p>

          {/* CTAs com ícones oficiais */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium bg-[#F6C20E] text-black hover:bg-[#C79C0B] shadow text-sm sm:text-base"
            >
              <Image
                src="/assets/apple-icon.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <span>App Store</span>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium bg-[#F6C20E] text-black hover:bg-[#C79C0B] shadow text-sm sm:text-base"
            >
              <Image
                src="/assets/android-icon.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <span>Google Play</span>
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
