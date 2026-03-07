"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Captures UTM parameters from the URL and renders them as hidden form fields.
 * Drop this inside any <form> to automatically tag submissions with campaign source data.
 *
 * Usage in links:
 *   brooksforburlington.com?utm_source=facebook&utm_medium=social&utm_campaign=spring2026
 *   brooksforburlington.com?utm_source=doorknock_flyer&utm_medium=print
 *   brooksforburlington.com?utm_source=yard_sign&utm_medium=offline
 *   brooksforburlington.com?utm_source=email_blast&utm_medium=email&utm_campaign=volunteer_drive
 */

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function UtmFields() {
  const searchParams = useSearchParams();
  const [utmValues, setUtmValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const params: Record<string, string> = {};

    // First check URL params
    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) params[key] = value;
    });

    // If we found UTM params, save them to sessionStorage so they persist across pages
    if (Object.keys(params).length > 0) {
      try {
        sessionStorage.setItem("utm_params", JSON.stringify(params));
      } catch {
        // sessionStorage not available, that's fine
      }
      setUtmValues(params);
    } else {
      // Try to recover from sessionStorage (user navigated to a sub-page)
      try {
        const stored = sessionStorage.getItem("utm_params");
        if (stored) setUtmValues(JSON.parse(stored));
      } catch {
        // no stored params, that's fine
      }
    }
  }, [searchParams]);

  if (Object.keys(utmValues).length === 0) return null;

  return (
    <>
      {Object.entries(utmValues).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}
    </>
  );
}
