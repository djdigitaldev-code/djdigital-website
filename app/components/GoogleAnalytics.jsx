"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "dj-digital-cookie-consent";

export default function GoogleAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const readConsent = () => {
      const savedConsent = localStorage.getItem(STORAGE_KEY);

      if (!savedConsent) {
        setAnalyticsAllowed(false);
        return;
      }

      try {
        const consent = JSON.parse(savedConsent);
        setAnalyticsAllowed(consent.analytics === true);
      } catch {
        setAnalyticsAllowed(false);
      }
    };

    readConsent();

    const handleConsentChange = (event) => {
      setAnalyticsAllowed(event.detail?.analytics === true);
    };

    window.addEventListener(
      "cookieConsentChanged",
      handleConsentChange
    );

    return () => {
      window.removeEventListener(
        "cookieConsentChanged",
        handleConsentChange
      );
    };
  }, []);

  const measurementId = process.env.NEXT_PUBLIC_GA_ID;

  if (!analyticsAllowed || !measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}