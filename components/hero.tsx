"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* HERO IMAGE: Replace /public/images/campaign/hero.jpg with your main campaign photo (recommended: 1920×1080 or larger) */}
      <Image
        src="/images/campaign/hero.jpg"
        alt="Jeremy Brooks addressing community members"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-[#1A1A1A]/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-12 pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#B0D4F1] uppercase mb-4">
            MISSION: BURLINGTON SCHOOL COMMITTEE 2026
          </p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tight text-[#FFFFFF] mb-6">
            LEADERSHIP
            <br />
            TESTED.
            <br />
            PROMISES
            <br />
            KEPT.
          </h1>

          <p className="font-body text-base md:text-lg text-[#FFFFFF]/70 max-w-[600px] leading-relaxed mb-8">
            A veteran, a product manager, and a dedicated father delivering
            fiscal discipline and innovation to Burlington schools.
          </p>

          <a
            href="#record"
            className="inline-block bg-[#FFFFFF] text-[#1A1A1A] font-display text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#F0EFE9] transition-colors duration-200 uppercase"
          >
            VIEW THE RECORD
          </a>
        </motion.div>
      </div>
    </section>
  );
}
