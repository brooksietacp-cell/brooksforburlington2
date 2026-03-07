"use client";

import { motion } from "framer-motion";

const cards = [
  {
    overline: "FISCAL DISCIPLINE",
    title: "20-Year Capital Plan",
    text: "Championed Burlington\u2019s first 20-year facilities plan \u2014 expanding the old 10-year framework to project lifecycle costs and protect taxpayers from budget surprises. This plan integrates school replacements, field maintenance, and major capital needs into one living document.",
  },
  {
    overline: "ACCOUNTABILITY",
    title: "Sole Vote on Principle",
    text: "Cast the only dissenting vote on an off-agenda superintendent contract extension. Pushed for independent investigation and full accountability when student survey procedures were violated. Abstained on MCAS resolution until replacement standards were defined. When something isn\u2019t right, I say so.",
  },
  {
    overline: "SAFETY",
    title: "School Safety Liaison",
    text: "Appointed as the committee\u2019s first-ever Safety Committee Liaison after students raised concerns about knife threats and malfunctioning panic buttons. Advocated for $54,800 in emergency system upgrades and work to modernize decade-old security infrastructure across all schools.",
  },
];

export function OperationalRecord() {
  return (
    <section id="record" className="bg-[#FAFAF7] py-24 lg:py-32 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#1A1A1A]">
          THREE YEARS OF RESULTS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.overline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] p-8 flex flex-col hover:border-[rgba(0,0,0,0.2)] hover:shadow-md transition-all duration-300"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-[#1B3A5C] uppercase mb-4">
              {card.overline}
            </p>
            <h3 className="font-display text-2xl font-bold text-[#1A1A1A] uppercase mb-3">
              {card.title}
            </h3>
            <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
