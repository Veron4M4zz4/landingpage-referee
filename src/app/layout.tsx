import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Árbitro de Aluguel — Landing",
  description: "Conecte jogadores, quadras e árbitros com praticidade e pagamento seguro.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Árbitro de Aluguel",
    description: "Sem dor de cabeça. Deixa com a gente!",
    url: "https://example.com",
    siteName: "Árbitro de Aluguel",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Árbitro de Aluguel" }],
    type: "website",
  },
  themeColor: "#0F172A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
