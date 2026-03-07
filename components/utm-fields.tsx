"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

function UtmFieldsInner() {
  const searchParams = useSearchParams();
  const [utmValues, setUtmValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const params: Record<string, string> = {};

    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) params[key] = value;
    });

    if (Object.keys(params).length > 0) {
      try {
        sessionStorage.setItem("utm_params", JSON.stringify(params));
      } catch {
        // sessionStorage not available
      }
      setUtmValues(params);
    } else {
      try {
        const stored = sessionStorage.getItem("utm_params");
        if (stored) setUtmValues(JSON.parse(stored));
      } catch {
        // no stored params
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

export function UtmFields() {
  return (
    <Suspense fallback={null}>
      <UtmFieldsInner />
    </Suspense>
  );
}
