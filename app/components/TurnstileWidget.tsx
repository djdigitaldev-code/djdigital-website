"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

export default function TurnstileWidget({
  onVerify,
}: TurnstileWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      onVerify(token);
    };

    return () => {
      delete window.onTurnstileSuccess;
    };
  }, [onVerify]);

  return (
    <div
      className="cf-turnstile"
      data-sitekey="0x4AAAAAAERn8VO2L-8U72DJ"
      data-callback="onTurnstileSuccess"
    />
  );
}