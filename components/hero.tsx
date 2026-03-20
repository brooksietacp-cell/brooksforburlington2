"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* HERO IMAGE: Replace /public/images/campaign/hero.jpg with your main campaign photo (recommended: 1920×1080 or larger) */}
      <Image
        src="/images/campaign/hero.jpg"
        alt="Jeremy Brooks at a Burlington School Committee meeting"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-[#1A1A1A]/20" />

      <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-12 pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#B0D4F1] uppercase mb-4">
            RE-ELECTION — BURLINGTON SCHOOL COMMITTEE — APRIL 11, 2026
          </p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tight text-[#FFFFFF] mb-6">
            ACCOUNTABILITY.
            <br />
            DISCIPLINE.
            <br />
            RESULTS.
          </h1>

          <p className="font-body text-base md:text-lg text-[#FFFFFF]/70 max-w-[600px] leading-relaxed mb-8">
            Three years of transparent governance, fiscal oversight, and safety
            leadership for Burlington Public Schools. 
            Re-elect Jeremy Brooks, April 11.
          </p>

          <a
            href="#record"
            className="inline-block bg-[#FFFFFF] text-[#1A1A1A] font-display text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#F0EFE9] transition-colors duration-200 uppercase"
          >
            SEE WHAT I&apos;VE DELIVERED
          </a>
        </motion.div>
      </div>
    </section>
  );
}
