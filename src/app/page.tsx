// components/HeroCarouselSimple.tsx
"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
  <HeroCarousel />
</section>

      {/* Outras seções você pode adicionar depois */}
    </main>
  );
}