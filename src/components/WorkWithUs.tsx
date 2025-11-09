// src/components/WorkWithUs.tsx
import Image from "next/image";

const passos = [
  "Baixe o aplicativo na loja do seu celular.",
  "Cadastre-se como Árbitro.",
  "Construa seu currículo de árbitro por meio das nossas curtas (gratuitas).",
  "Ganhe dinheiro apitando na hora que quiser!",
];

export default function WorkWithUs() {
  return (
    <section
      id="trabalhe-conosco"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* LINES como background-image */}
      <div
        aria-hidden
        className="
          absolute inset-0 pointer-events-none opacity-25
          bg-[url('/assets/lines-work.svg')] bg-no-repeat
          bg-right md:bg-[length:1400px_auto] bg-[length:1100px_auto]
        "
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 grid md:grid-cols-2 items-center gap-12">
        {/* ESQUERDA: mockup */}
        <div className="relative flex justify-center md:justify-start">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-[120px] opacity-60 -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(246,194,14,0.55) 0%, rgba(246,194,14,0.18) 60%, transparent 100%)",
            }}
          />
          <Image
            src="/assets/mockup2.svg"
            alt="Tela do app - Trabalhe Conosco"
            width={260}
            height={520}
            className="drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>

        {/* DIREITA: texto */}
        <div className="relative space-y-8">
          <h2 className="text-white text-3xl md:text-5xl font-semibold">
            Trabalhe Conosco
          </h2>

          <ol className="space-y-5">
            {passos.map((p, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F6C20E] text-black font-bold">
                  {idx + 1}
                </span>
                <p className="text-slate-200 leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>

          <div>
            <a
              href="#"
              className="inline-flex items-center rounded-full px-5 py-3 font-medium bg-emerald-500 hover:bg-emerald-600 text-white shadow"
            >
              Acesse o Manual do Árbitro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
