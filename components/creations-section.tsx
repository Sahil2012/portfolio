"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: "naukri",
        title: "Naukri Outreach",
        description: "A SaaS tool that simplifies the referral process by automating outreach workflows and generating context-aware referral and follow-up messages tailored to the company, role, and job description using AI.",
        href: "https://Naukri-outreach.vercel.app/",
        actionText: "See the Tool",
        gradient: "from-emerald-500/10 via-teal-500/10 to-blue-500/10",
        image: "/naukri-outreach.png"
    },
    {
        id: "novacrafts",
        title: "NovaCraftsAI",
        description: "A software studio focused on turning ideas into real systems — spanning web and mobile applications, AI agents and workflow automation.",
        href: "https://novacraftsai.com/",
        actionText: "Visit Studio",
        gradient: "from-orange-500/10 via-amber-500/10 to-red-500/10",
        image: "/nova-crafts-ai.png"
    }
];

export const CreationsSection = () => {
    const [activeindex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="min-h-screen flex flex-col pt-12 pb-20 relative overflow-hidden bg-white dark:bg-transparent">
            {/* Background Ambient Glow (Dark Mode Only) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden dark:block">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 md:px-12">

                {/* Header (Left Aligned as requested) */}
                <div className="mb-10 md:mb-16 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-semibold tracking-tighter text-foreground leading-[1.1] animate-slideUp whitespace-pre-line mb-8"
                    >
                        Creations.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight leading-snug animate-slideUp animate-delay-200"
                    >
                        Tools that solve real problems. <br className="hidden md:block" />
                        <span className="text-foreground">From automating job applications to crafting custom software solutions.</span>
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Accordion List */}
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={cn(
                                    "group rounded-3xl transition-all duration-500 border",
                                    activeindex === index
                                        ? "bg-muted/50 border-input p-8 shadow-sm"
                                        : "bg-transparent border-transparent p-4 hover:bg-muted/30"
                                )}
                            >
                                <div
                                    onClick={() => setActiveIndex(activeindex === index ? null : index)}
                                    className="flex items-center justify-between cursor-pointer"
                                >
                                    <h3 className={cn(
                                        "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                                        activeindex === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        {project.title}
                                    </h3>
                                    {activeindex === index && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                        />
                                    )}
                                </div>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: activeindex === index ? "auto" : 0,
                                        opacity: activeindex === index ? 1 : 0,
                                        marginTop: activeindex === index ? 24 : 0
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                                        {project.description}
                                    </p>

                                    <Link
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-muted hover:bg-muted/80 px-6 py-3 rounded-full transition-all hover:scale-105 border border-input"
                                    >
                                        {project.actionText}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Image Area */}
                    <div className="hidden lg:block sticky top-32 w-full aspect-[16/10]">
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-input bg-card shadow-2xl backdrop-blur-sm">
                            <AnimatePresence mode="wait">
                                {activeindex !== null ? (
                                    <motion.div
                                        key={projects[activeindex].id}
                                        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-0 group cursor-pointer"
                                    >
                                        <Link href={projects[activeindex].href} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                                            {/* Background Gradient based on project */}
                                            <div className={cn(
                                                "absolute inset-0 opacity-20 bg-gradient-to-br",
                                                projects[activeindex].gradient
                                            )} />

                                            {/* Image Placeholder */}
                                            {projects[activeindex].image ? (
                                                <Image
                                                    src={projects[activeindex].image}
                                                    alt={projects[activeindex].title}
                                                    fill
                                                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-4">
                                                    <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center border border-input">
                                                        <ExternalLink className="w-10 h-10 opacity-50" />
                                                    </div>
                                                    <p className="font-medium">Preview of {projects[activeindex].title}</p>
                                                </div>
                                            )}

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 dark:bg-black/20 backdrop-blur-[1px]">
                                                <div className="bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                                                    Visit Site <ExternalLink className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Glass Shine */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                    >
                                        <div className="w-24 h-24 rounded-3xl bg-muted/50 flex items-center justify-center mb-6 border border-input shadow-inner">
                                            <MousePointerClick className="w-10 h-10 text-muted-foreground/60" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-foreground mb-2">Select a project</h4>
                                        <p className="text-muted-foreground max-w-xs">
                                            Click on any item from the list to view project details and preview the live site.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
