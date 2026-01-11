"use client";
import { cn } from "@/lib/utils";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  currentIndex: number | undefined;
  setCurrentIndex: (index: number) => void;
}>({
  currentIndex: undefined,
  setCurrentIndex: (index: number) => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!carouselRef.current?.contains(event.target as Node)) {
        setCurrentIndex(undefined);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <CarouselContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <div className="relative w-full">
        <div className="relative container mx-auto w-full">
          <div className="hidden sm:flex justify-end gap-2 absolute -top-12 md:-top-20 right-0 mr-10">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 cursor-pointer"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 cursor-pointer"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        </div>
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 lg:py-12 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div className="container mx-auto px-8">
            <div className="flex flex-row justify-start gap-4 -mx-8">
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.3 + 0.2 * index,
                      ease: "easeOut",
                      // @ts-ignore
                      once: true,
                    },
                  }}
                  key={"card" + index}
                  className="first:ml-8 rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const { currentIndex, setCurrentIndex } = useContext(CarouselContext);

  const isMobileOrTablet = () => {
    return window.innerWidth < 1024;
  };

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      // onClick={handleOpen}
      className={cn(
        "relative z-10 flex h-96 w-56 sm:h-[30rem] sm:w-72 md:h-[40rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 hover:w-xs md:hover:w-[40rem] transition-all duration-300 ease-in-out group",
        currentIndex === index && "w-xs md:w-[40rem]"
      )}
      onClick={() => {
        if (isMobileOrTablet()) {
          setCurrentIndex(index);
        }
      }}
      style={{
        transformOrigin: "left center",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="relative z-40 p-5 sm:p-6 md:p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-left font-sans text-sm font-medium text-white md:text-base"
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="mt-1 sm:mt-1.5 md:mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
        >
          {card.title}
        </motion.p>
      </div>
      {card.content}
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 z-10 object-cover"
        shouldBlur={currentIndex === index}
      />
    </motion.button>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  shouldBlur,
  alt,
  ...rest
}: ImageProps & { shouldBlur?: boolean }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden">
      <Image
        className={cn(
          "h-full w-full transition duration-300 group-hover:scale-105 origin-center will-change-[filter]",
          isLoading || shouldBlur ? "blur-sm" : "blur-[2px] group-hover:blur-sm",
          className
        )}
        onLoad={() => setLoading(false)}
        src={src as string}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        blurDataURL={typeof src === "string" ? src : undefined}
        alt={alt ? alt : "Background of a beautiful view"}
        {...rest}
      />
    </div>
  );
};
