"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectFeatureProps {
    title: string;
    description: string;
    href: string;
    actionText?: string;
    image?: string;
    reversed?: boolean;
    gradient?: string;
}

export const ProjectFeature = ({
    title,
    description,
    href,
    actionText = "Learn more",
    image,
    reversed = false,
    gradient = "from-blue-500/20 to-purple-500/20",
}: ProjectFeatureProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={ref}
            className={cn(
                "relative py-24 lg:py-32 overflow-hidden w-full",
            )}
        >
            {/* Ambient Background Gradient */}
            <div
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] rounded-full blur-[120px] opacity-20 pointer-events-none -z-10 bg-gradient-to-br",
                    gradient
                )}
            />

            <div className="container mx-auto px-6 md:px-12">
                <div className={cn(
                    "flex flex-col lg:items-center gap-12 lg:gap-20",
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                )}>
                    {/* Text Content */}
                    <div className="flex-1 space-y-8 lg:py-12 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white">
                                {title}
                            </h2>
                            <div className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium whitespace-pre-line max-w-xl">
                                {description}
                            </div>

                            <div className="pt-4">
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                                >
                                    {actionText}
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual/Image Content */}
                    <div className="flex-1 w-full relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 shadow-2xl"
                        >
                            {image ? (
                                <Image src={image} alt={title} fill className="object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                                    <span className="text-neutral-600 font-medium text-xl">Project Preview</span>
                                </div>
                            )}

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
