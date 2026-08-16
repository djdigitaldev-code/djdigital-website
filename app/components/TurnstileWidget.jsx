"use client";

import { useEffect } from "react";

export default function TurnstileWidget({ onVerify }) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    window.onTurnstileSuccess = (token) => {
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