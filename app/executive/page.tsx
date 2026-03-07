"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ArrowLeft, Server, DollarSign, BarChart3, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { icon: DollarSign, title: "$250M Acquisition Management", text: "Led defense acquisition programs up to $250 million. The same rigor applied to evaluating school district budgets, vendor contracts, and capital spending." },
  { icon: BarChart3, title: "Cornell-Certified Analytics", text: "Business Analytics certification from Cornell University. Data-driven decision making for enrollment projections, budget modeling, and performance tracking." },
  { icon: Shield, title: "CompTIA Security+", text: "Certified in cybersecurity fundamentals. Directly relevant to protecting student data privacy and evaluating district technology investments." },
];

export default function ExecutivePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <Header />

      <section className="relative h-[60vh] min-h-[500px]">
        {/* EXECUTIVE HERO IMAGE: Replace /public/images/leadership/executive-hero.jpg with a professional/corporate photo */}
        <Image
          src="/images/leadership/executive-hero.jpg"
          alt="Executive leadership and technology"
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
              <Server className="w-6 h-6 text-[#C41E3A]" strokeWidth={1.5} />
              <p className="font-mono text-xs tracking-[0.3em] text-[#FFFFFF] uppercase">
                THE EXECUTIVE
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FFFFFF] text-balance drop-shadow-lg">
              From Defense Acquisitions to School Governance
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-[#FFFFFF] border-b border-[rgba(0,0,0,0.08)] py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-start gap-3 p-6 bg-[#FAFAF7] border border-[rgba(0,0,0,0.08)]"
            >
              <cap.icon className="w-5 h-5 text-[#1B3A5C]" strokeWidth={1.5} />
              <p className="font-display text-base font-bold text-[#1A1A1A] uppercase">{cap.title}</p>
              <p className="font-body text-xs text-[#6B6B6B] leading-relaxed">{cap.text}</p>
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
              Senior Product Manager
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              As a Product Manager, I lead product development for defense technology systems that protect American service members and allies. This role demands precision, strategic thinking, and the ability to coordinate complex initiatives across multiple teams and stakeholders.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              Working at the cutting edge of technology has given me a unique perspective on how innovation can solve seemingly impossible problems. Our schools deserve that same innovative approach &mdash; not bureaucratic status quo thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              Multi-Million Dollar Budget Management
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              I&apos;ve managed budgets exceeding what many school districts spend annually. This experience has taught me how to maximize value from every dollar, identify waste, and make strategic investments that deliver measurable returns.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              School committee members are stewards of taxpayer money. They need to understand financial management, not just rubber-stamp administrative recommendations. I bring the fiscal expertise to ask the hard questions and demand accountability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              Complex Project Leadership
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              Technical project management requires balancing competing priorities, managing risk, and delivering results on schedule. These skills translate directly to school board governance, where complex initiatives often stall due to poor planning and execution.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              Whether it&apos;s implementing new educational technology, managing construction projects, or rolling out district-wide initiatives, I bring proven methodologies for turning plans into reality. Our students can&apos;t wait for endless deliberation &mdash; they need action.
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
