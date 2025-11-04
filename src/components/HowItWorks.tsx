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
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 120%, rgba(0,0,0,0.35), transparent 40%), linear-gradient(180deg, #121212 0%, #0D0D0D 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-center md:text-left text-white text-3xl md:text-5xl font-semibold leading-tight">
            Quer tornar suas partidas mais <span className="block">competitivas?</span>
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

          <p className="mt-6 text-center md:text-left font-semibold uppercase tracking-wide text-[#F6C20E]">
            Tudo pronto, agora é só jogar!
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 translate-y-6 md:translate-y-10 -z-10"
            style={{
              background:
                "radial-gradient(closest-side, rgba(246,194,14,0.35), rgba(246,194,14,0.18), transparent 70%)",
              filter: "blur(4px)",
            }}
          />
          <Image
            src="/assets/iphone14.svg"
            alt="App Árbitro de Aluguel"
            width={420}
            height={420}
            className="rotate-[15deg] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
