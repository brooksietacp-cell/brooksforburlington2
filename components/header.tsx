"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "RECORD", href: "/#record" },
  { label: "BIO", href: "/#bio" },
  { label: "VOTE", href: "/#vote" },
  { label: "CONTACT", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF7]/90 backdrop-blur-xl border-b border-[rgba(0,0,0,0.08)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
          <a
            href="/"
            className={`font-display text-base font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
              scrolled ? "text-[#1A1A1A]" : "text-[#FFFFFF]"
            }`}
          >
            JEREMY BROOKS
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-[#6B6B6B] hover:text-[#1A1A1A]"
                    : "text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://venmo.com/BrooksforBurlington?txn=pay"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-block bg-[#C41E3A] text-[#FFFFFF] font-display text-xs font-bold tracking-widest px-6 py-3 hover:bg-[#A3182F] transition-colors duration-200 uppercase"
            >
              GET INVOLVED
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 transition-colors ${
                scrolled ? "text-[#1A1A1A]" : "text-[#FFFFFF]"
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#000000]/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[300px] max-w-[85vw] bg-[#FAFAF7] border-l border-[rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(0,0,0,0.08)]">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
                  MENU
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="font-display text-2xl font-bold tracking-wide text-[#1A1A1A] uppercase py-3 border-b border-[rgba(0,0,0,0.05)] hover:text-[#C41E3A] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-[rgba(0,0,0,0.08)]">
                <a
                  href="https://venmo.com/BrooksforBurlington?txn=pay"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-[#C41E3A] text-[#FFFFFF] font-display text-sm font-bold tracking-widest px-6 py-4 hover:bg-[#A3182F] transition-colors duration-200 uppercase"
                >
                  GET INVOLVED
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
