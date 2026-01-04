"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

interface CreationsCardProps {
    title: string;
    description: string;
    href: string;
    className?: string;
    actionText?: string;
    gradient?: string;
    image?: string;
}

export const CreationsCard = ({
    title,
    description,
    href,
    className,
    actionText = "Learn more",
    gradient = "from-blue-500/20 to-purple-500/20",
    image,
}: CreationsCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLAnchorElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-neutral-950/50 border border-white/10 transition-all duration-500 hover:border-white/20",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Starting Effects */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
                }}
            />

            <div
                className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br blur-3xl",
                    gradient
                )}
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                        {title}
                    </h3>
                    <div className="text-lg text-neutral-400 leading-relaxed font-medium max-w-[90%] group-hover:text-neutral-300 transition-colors whitespace-pre-line">
                        {description}
                    </div>
                </div>

                {/* Image Placeholder Area */}
                <div className="mt-8 flex-grow relative min-h-[200px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-medium">
                        {image ? (
                            <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                            <span>Project Preview</span>
                        )}
                    </div>
                </div>

                <div className="pt-8 flex justify-between items-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 group-hover:pr-4">
                        {actionText}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
