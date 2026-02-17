import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-center md:text-left">
          {/* Column 1: Logo + Description – centered on mobile, left on desktop */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6 inline-block">
              <div className="relative h-16 w-64 md:h-20 md:w-72 mx-auto md:mx-0">
                <Image
                  src="/media/bramaqLogo.png"
                  alt="BRAMAQ Transportes Especiais e Terraplanagem - Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
              Especializados em transportes especiais de cargas indivisíveis, máquinas pesadas, geradores e terraplanagem em Joinville e região.
            </p>
          </div>

          {/* Column 2: Links Rápidos – centered on mobile */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contato – centered on mobile */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-4 text-sm md:items-end">
              <a
                href="https://wa.me/5547999340968?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20transporte%20especial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
              >
                <span className="text-green-500 font-medium">WhatsApp:</span>
                <span>(47) 99934-0968</span>
              </a>

              <div className="flex flex-col items-center md:items-center gap-2">
                <h4 className="text-sm font-medium text-gray-400">Redes Sociais</h4>
                <div className="flex gap-6">
                   <a
                href="https://www.instagram.com/bramaq_transportes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram da BRAMAQ"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </a>
                    <a
                    href="https://www.facebook.com/p/Bramaq-Transportes-Especiais-e-Terraplenagem-100044318516753/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label="Facebook da BRAMAQ"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright – always centered */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRAMAQ Transportes Especiais e Terraplanagem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}