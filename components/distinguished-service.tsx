"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield } from "lucide-react";

const decorations = [
  { award: "Bronze Star Medal", count: "4×", detail: "Meritorious service in combat operations" },
  { award: "Years of Service", count: "20+", detail: "Active duty commitment" },
  { award: "Acquisition Expertise", count: "25 yrs", detail: "Defense and technology program management" },
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
          DISTINGUISHED SERVICE
          <br />
          & RECOGNITION
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
              {/* MEDALS IMAGE: Replace /public/images/campaign/medals.jpg with your medals/commendations photo */}
              <Image
                src="/images/campaign/medals.jpg"
                alt="Military service medals and commendations earned during 20+ years of active duty"
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
              Jeremy&apos;s leadership has been tested in the most demanding environments on the planet. Over two decades of active duty service forged a commitment to discipline, accountability, and mission accomplishment that he brings to every School Committee decision.
            </p>

            <div className="flex flex-col gap-4">
              {decorations.map((item, i) => (
                <motion.div
                  key={item.award}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] p-5"
                >
                  <Shield className="w-5 h-5 text-[#1B3A5C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display text-xl font-bold text-[#1A1A1A] uppercase">
                        {item.count}
                      </span>
                      <span className="font-display text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
                        {item.award}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#6B6B6B]">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">
              The same operational rigor that earned these commendations now drives fiscal oversight, infrastructure accountability, and strategic planning for Burlington&apos;s schools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
