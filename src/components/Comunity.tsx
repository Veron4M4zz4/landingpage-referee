// src/components/Community.tsx
import Image from "next/image";

const itens = ["Apito","Blusa Amarela","Short Preto","Meião e Chuteira","Cartão Vermelho e Amarelo"];

export default function Community() {
  return (
    <section id="comunidade" className="relative overflow-hidden py-16 md:py-24 bg-[#111111]">
      {/* LINES background */}
      <div
        aria-hidden
        className="
          absolute inset-0 pointer-events-none opacity-80
          bg-[url('/assets/lines-community.svg')] bg-no-repeat
          bg-left md:bg-[length:1200px_auto] bg-[length:900px_auto]
        "
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 grid md:grid-cols-2 items-center gap-10">
        <div className="relative flex justify-center md:justify-start">
          <Image
            src="/assets/image.svg"
            alt="Uniformes de árbitros"
            width={420}
            height={420}
            className="drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Venha fazer parte da<br/>maior comunidade<br/>de árbitros do Brasil
          </h2>

          <ul className="space-y-5">
            {itens.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F6C20E] text-black font-bold">
                  {idx + 1}
                </span>
                <p className="text-slate-200 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-slate-500">
        <p>Termos e condições de uso do aplicativo e site</p>
        <p>Termos e condições de uso do seguro para árbitros</p>
      </div>
    </section>
  );
}
