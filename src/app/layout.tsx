import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vendlyapp.com.br"),
  title: "Vendly | Sistema para lojas de celulares novos e seminovos",
  description: "Estoque, vendas, trocas, financeiro e vitrine no mesmo sistema. Conheça o Vendly, feito para lojas independentes de celulares e acessórios.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", url: "https://vendlyapp.com.br", siteName: "Vendly", title: "Toda a estrutura que sua loja precisa para vender mais.", description: "Estoque, vendas, trocas, financeiro e vitrine. Feito para quem vende celular.", images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: "Vendly, sistema para lojas de celulares" }] },
  twitter: { card: "summary_large_image", title: "Vendly | Feito para quem vende celular", description: "Mais clareza na operação. Mais estrutura para vender.", images: ["/brand/og-image.png"] },
};

export const viewport: Viewport = { themeColor: "#FEFEFF" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
