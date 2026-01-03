"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteData } from "@/lib/data";

const Hero = () => {
  return (
    <section className="relative h-full flex items-stretch">
      <div className="container mx-auto w-full px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
          {/* Left Content - Positioned slightly above center */}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] animate-slideUp">
              {siteData.profile.title}
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 animate-slideUp animate-delay-200">
              {siteData.profile.description}
            </p>

            <div className="animate-slideUp animate-delay-400">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full border-2 hover:bg-foreground hover:text-background transition-all duration-300"
                asChild
              >
                <a
                  href={siteData.contact.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let&apos;s chat →
                </a>
              </Button>
            </div>
          </div>

          {/* Right Portrait - Aligned to bottom */}
          <div className="absolute flex bottom-0 right-0 justify-center lg:justify-end items-end animate-fadeIn animate-delay-600 h-full w-1/2">
            <div className="relative w-full h-full portrait-shadow">
              <Image
                src="/sahil-1.png"
                alt={siteData.profile.fullName}
                fill
                style={{
                  filter:
                    "drop-shadow(0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.5)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                }}
                className="absolute left-0 bottom-0 object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
