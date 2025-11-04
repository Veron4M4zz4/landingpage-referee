import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-black/60 backdrop-blur">
      <div className="mx-auto w-full max-w-[1280px] px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/assets/logo-principal.svg"
            alt="Árbitro de Aluguel"
            width={56}  // logo maior
            height={56}
            priority
          />
          <span className="hidden sm:block font-semibold">Árbitro de Aluguel</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#como-funciona" className="hover:underline">Como Funciona</a>
          <a href="#faq" className="hover:underline">Dúvidas Frequentes</a>
          <a href="#termos" className="hover:underline">Termos de uso</a>
        </nav>

        <a
          href="#baixe"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium
                     bg-[var(--brand)] text-black hover:bg-[var(--brand-700)] shadow"
        >
          Baixe o App
        </a>
      </div>
    </header>
  );
}
