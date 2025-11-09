// src/app/page.tsx
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WorkWithUs from "@/components/WorkWithUs";
import Community from "@/components/Comunity"; // ⬅️ novo

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WorkWithUs />
      <Community /> {/* ⬅️ seção “Comunidade de Árbitros” */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1280px] px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-400">
            © {new Date().getFullYear()} Árbitro de Aluguel
          </span>
          <a className="text-sm underline text-slate-300" href="#" id="termos">
            Política de Privacidade
          </a>
        </div>
      </footer>
    </>
  );
}
