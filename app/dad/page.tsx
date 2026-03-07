"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ArrowLeft, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DadPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <Header />

      {/* Hero Section — stays dark (photo overlay) */}
      <section className="relative h-[60vh] min-h-[500px]">
        {/* DAD HERO IMAGE: Replace /public/images/family/dad-hero.jpg with a photo of you with Lillian & Madelyn */}
        <Image
          src="/images/family/dad-hero.jpg"
          alt="Jeremy Brooks with his daughters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#FAFAF7]" />
        <div className="absolute inset-0 flex items-end pb-16 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-[#C41E3A]" strokeWidth={1.5} />
              <p className="font-mono text-xs tracking-[0.3em] text-[#FFFFFF] uppercase">
                THE DAD
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FFFFFF] text-balance drop-shadow-lg">
              Family First Leadership
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#FFFFFF] border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center text-center">
          {[
            { stat: "2", label: "Daughters in Burlington Schools" },
            { stat: "100+", label: "School Events Attended" },
            { stat: "Every", label: "PTC Meeting Since 2020" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <p className="font-display text-3xl font-black text-[#1A1A1A] uppercase">{item.stat}</p>
              <p className="font-mono text-[10px] tracking-widest text-[#6B6B6B] uppercase mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-[#FAFAF7] py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              A Personal Stake in Education
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              As the father of Lillian and Madelyn, I don&apos;t just have a professional interest in our school district, I have a deeply personal one. Every policy decision, every budget allocation, every curriculum choice directly impacts my own children sitting in those classrooms.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              This isn&apos;t abstract governance for me. When I advocate for better resources, safer facilities, and stronger educational outcomes, I&apos;m fighting for my daughters&apos; future alongside every other child in our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              Building Community Through Involvement
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              Being a dad means showing up at school events, parent-teacher conferences, and community gatherings. I&apos;ve coached youth sports, volunteered with the recreation department, school functions, and built relationships with other families facing the same challenges we all face.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              These connections give me invaluable insight into what parents actually need from their school committee. Not policy jargon, but real solutions to real problems: accessible after-school programs, transparent communication, and accountability from administrators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              The Long-Term Vision
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              My children will be in this school system for years to come. That means I&apos;m not interested in short-term fixes or political wins, I&apos;m focused on sustainable improvements that will benefit students for a generation.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              From infrastructure investments to teacher retention strategies, every decision I make considers the long-term impact on our children&apos;s education. Because when you&apos;re building something for your own kids, you build it to last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-[rgba(0,0,0,0.1)]"
          >
            <Link
              href="/#bio"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-[#1B3A5C] hover:text-[#1A1A1A] transition-colors duration-200 uppercase"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back to Leadership Profile
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
