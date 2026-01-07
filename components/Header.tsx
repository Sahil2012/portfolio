"use client";

import Link from "next/link";
import { data } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 h-16"
    >
      <div className="backdrop-blur-sm bg-background/30 h-full">
        <div className="container mx-auto px-7 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Name */}
            <Link
              href="/"
              className="text-2xl font-semibold tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              {data.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ThemeToggle />
              <nav className="flex items-center gap-8 h-full">
                {data.navigation.map((link: any) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground hover:text-foreground/70 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden backdrop-blur-sm bg-background/95 border-b border-border/50"
          >
            <nav className="container mx-auto px-7 lg:px-8 pt-2 pb-5 flex flex-col gap-4">
              {data.navigation.map((link: any, index: number) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-foreground/70 hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
