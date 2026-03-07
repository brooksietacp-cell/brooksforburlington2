"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Mail, Link2, Check } from "lucide-react";
import { useState } from "react";

const SITE_URL = "https://brooksforburlington.com";
const SHARE_TITLE = "Jeremy Brooks for Burlington School Committee";
const SHARE_TEXT = "Support Jeremy Brooks for Burlington School Committee - a dad, veteran, and executive committed to our schools.";

export function ShareSection() {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(SHARE_TITLE)}`,
    email: `mailto:?subject=${encodeURIComponent(SHARE_TITLE)}&body=${encodeURIComponent(SHARE_TEXT + "\n\n" + SITE_URL)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = SITE_URL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const buttons = [
    {
      label: "Facebook",
      icon: Facebook,
      href: shareUrls.facebook,
      external: true,
    },
    {
      label: "X",
      icon: Twitter,
      href: shareUrls.twitter,
      external: true,
    },
    {
      label: "Email",
      icon: Mail,
      href: shareUrls.email,
      external: false,
    },
    {
      label: copied ? "Copied" : "Copy Link",
      icon: copied ? Check : Link2,
      onClick: handleCopyLink,
      external: false,
    },
  ];

  return (
    <section className="bg-[#FAFAF7] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#1B3A5C] uppercase mb-4">
            SPREAD THE WORD
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6 uppercase">
            Help Spread the Word
          </h2>
          <p className="font-body text-base text-[#6B6B6B] mb-12 max-w-lg mx-auto">
            Help share our campaign with friends and neighbors in Burlington.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {buttons.map((button) => {
            const Icon = button.icon;

            if (button.onClick) {
              return (
                <button
                  key={button.label}
                  onClick={button.onClick}
                  className="flex items-center gap-3 bg-[#FFFFFF] border border-[rgba(0,0,0,0.1)] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] uppercase hover:border-[#1B3A5C] hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/20"
                >
                  <Icon className="w-4 h-4 text-[#1B3A5C]" strokeWidth={1.5} />
                  {button.label}
                </button>
              );
            }

            return (
              <a
                key={button.label}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noreferrer" : undefined}
                className="flex items-center gap-3 bg-[#FFFFFF] border border-[rgba(0,0,0,0.1)] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] uppercase hover:border-[#1B3A5C] hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/20"
              >
                <Icon className="w-4 h-4 text-[#1B3A5C]" strokeWidth={1.5} />
                {button.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
