// src/components/HowItWorks.tsx
import Image from "next/image";

const steps = [
  "Baixe o aplicativo. É grátis!",
  "Cadastre-se. É fácil e rápido.",
  "Solicite árbitros de todas as categorias!",
  "Pague com Pix ou Cartão de Crédito.",
  "Agora é só esperar para que suas partidas sejam apitadas.",
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden isolate py-16 md:py-24"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 120%, rgba(0,0,0,0.35), transparent 40%), linear-gradient(180deg, #121212 0%, #0D0D0D 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ESQUERDA — passos */}
          <div className="space-y-8">
            <h2 className="text-center md:text-left text-white text-3xl md:text-5xl font-semibold leading-tight">
              Quer tornar suas partidas mais{" "}
              <span className="block">competitivas?</span>
            </h2>

            <ol className="space-y-5">
              {steps.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F6C20E] text-black font-bold">
                    {i + 1}
                  </span>
                  <p className="text-slate-200 leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* DIREITA — mockup + blur (duas camadas) */}
          <div className="relative isolate flex justify-center md:justify-end">
            {/* glow base */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[160px] opacity-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(246,194,14,0.7) 0%, rgba(246,194,14,0.28) 60%, transparent 100%)",
              }}
            />
            {/* highlight concentrado */}
            <div
              aria-hidden
              className="absolute left-1/2 top-[58%] z-0 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full blur-[90px] opacity-75 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(246,194,14,0.9) 0%, rgba(246,194,14,0.35) 65%, transparent 100%)",
              }}
            />

            {/* MOCKUP CERTO */}
            <Image
              src="/assets/mockup1.svg"
              alt="App Árbitro de Aluguel"
              width={430}
              height={430}
              className="relative z-10 rotate-[15deg] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
        </div>

        {/* FRASE FINAL CENTRALIZADA */}
        <p className="mt-20 md:mt-14 text-center text-[#F6C20E] font-extrabold uppercase tracking-wide text-lg">
          Tudo pronto, agora é só jogar!
        </p>
      </div>
    </section>
  );
}
