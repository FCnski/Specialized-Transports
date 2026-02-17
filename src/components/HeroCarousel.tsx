"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// slide images are stored in public/media, reference them via absolute URLs
const slides = [
  {
    src: "/media/3eixoWEG.jpeg",
    alt: "Transporte especial de gerador indivisível",
    title: "Cargas Indivisíveis",
    description: "Geradores, turbinas e transformadores com segurança total",
  },
  {
    src: "/media/380_3eixoColheitadera.jpeg",
    alt: "Máquinas pesadas em transporte",
    title: "Equipamentos Pesados",
    description: "Escavadeiras, pás carregadeiras e retroescavadeiras",
  },
  {
    src: "/media/4eixoEscavadeira2.jpeg",
    alt: "Terraplanagem e movimentação de terra",
    title: "Terraplanagem",
    description: "Nivelamento, escavação e aterro com precisão",
  },
  {
    src: "/media/cavao3eixoMaterialCnstr.JPG",
    alt: "Carga especial indivisível",
    title: "Transporte Especializado",
    description: "Estruturas metálicas e cargas acima de 50 toneladas",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })] // 5 segundos por slide
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="relative w-full h-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* viewport must hide overflow, put class on the element we attach embla to */}
      <div className="embla h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover brightness-75"
                priority={index === 0}
                sizes="100vw"
                onLoadingComplete={() => emblaApi?.reInit()}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center text-white px-6 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <a href="/contato">Solicitar Orçamento</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots de navegação (opcional, bonito) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}