import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0C0C0C]"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 50% 120%, rgba(0,0,0,0.35), transparent 40%), linear-gradient(180deg, #111111, #0C0C0C)",
      }}
    >
      {/* ====== CÍRCULOS ALINHADOS (dentro da seção) ====== */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-full h-full flex items-center justify-start pl-[8%] -z-10"
      >
        <div className="relative w-[760px] h-[760px]">
          {/* círculo esquerdo */}
          <Image
            src="/assets/eclipse-circle.svg"
            alt=""
            width={760}
            height={760}
            className="absolute left-[-120px] top-[-80px] opacity-40"
            priority
          />
          {/* círculo direito */}
          <Image
            src="/assets/eclipse-circle.svg"
            alt=""
            width={760}
            height={760}
            className="absolute left-[140px] top-[-80px] opacity-35"
            priority
          />
          {/* círculo central menor */}
          <Image
            src="/assets/eclipse-circle.svg"
            alt=""
            width={480}
            height={480}
            className="absolute left-[140px] top-[120px] opacity-25"
            priority
          />
        </div>
      </div>

      {/* ====== CONTEÚDO ====== */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
        {/* Coluna esquerda: mockup */}
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

        {/* Coluna direita: texto e CTAs */}
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
