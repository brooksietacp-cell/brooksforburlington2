"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

const stats = [
  { stat: "$4.77M", title: "MSMS Field Renovation", detail: "Chaired the field committee. Project delivered on time and on budget with ADA-accessible design." },
  { stat: "20 Years", title: "Capital Plan Expansion", detail: "Championed the expansion from a 10-year to a 20-year facilities plan, now a living document guiding all major district investments." },
  { stat: "1st", title: "Safety Committee Liaison", detail: "Created the committee\u2019s first-ever formal liaison role to the District-Wide School Safety Committee after student safety incidents." },
];

export function DistinguishedService() {
  return (
    <section className="bg-[#FAFAF7] py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#1A1A1A] mb-16"
        >
          TRACK RECORD
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-[4/3] bg-[#F0EFE9] border border-[rgba(0,0,0,0.08)] overflow-hidden">
              {/* TRACK RECORD IMAGE: Replace /public/images/campaign/medals.jpg with a photo of you at a School Committee or Town Meeting */}
              <Image
                src="/images/campaign/medals.jpg"
                alt="Jeremy Brooks serving on the Burlington School Committee"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <p className="font-body text-base md:text-lg text-[#6B6B6B] leading-relaxed">
              Three years of committee work, measured in results. When I committed to fiscal discipline, transparency, and safety, I meant it, ; and the record backs it up.
            </p>

            <div className="flex flex-col gap-4">
              {stats.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] p-5"
                >
                  <TrendingUp className="w-5 h-5 text-[#1B3A5C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display text-xl font-bold text-[#1A1A1A] uppercase">
                        {item.stat}
                      </span>
                      <span className="font-display text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
                        {item.title}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#6B6B6B]">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
