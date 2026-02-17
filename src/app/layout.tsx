import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header"; // ajuste o caminho se necessário
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRAMAQ Transportes & Terraplanagem",
  description: "Serviços de transporte e terraplanagem em Joinville e região",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        
        {/* Add this line */}
        <Toaster 
          richColors 
          closeButton 
          position="top-right"   // or bottom-right, top-center, etc.
          duration={4000}        // optional – how long it stays visible
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}