"use client";

import { useEffect, useState } from "react";
import "./cookie-banner.css";

const STORAGE_KEY = "dj-digital-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (settings) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        necessary: true,
        analytics: settings.analytics,
        marketing: settings.marketing,
        date: new Date().toISOString(),
      })
    );

    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", {
        detail: settings,
      })
    );

    setVisible(false);
    setPreferencesOpen(false);
  };

  const acceptAll = () => {
    setAnalytics(true);
    setMarketing(true);

    saveConsent({
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    setAnalytics(false);
    setMarketing(false);

    saveConsent({
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent({
      analytics,
      marketing,
    });
  };

  useEffect(() => {
    const openPreferences = () => {
      const savedConsent = localStorage.getItem(STORAGE_KEY);

      if (savedConsent) {
        try {
          const settings = JSON.parse(savedConsent);
          setAnalytics(Boolean(settings.analytics));
          setMarketing(Boolean(settings.marketing));
        } catch {
          setAnalytics(false);
          setMarketing(false);
        }
      }

      setPreferencesOpen(true);
      setVisible(true);
    };

    window.addEventListener("openCookiePreferences", openPreferences);

    return () => {
      window.removeEventListener(
        "openCookiePreferences",
        openPreferences
      );
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div
        className="cookie-banner"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
      >
        {!preferencesOpen ? (
          <>
            <span className="cookie-label">PRIVACY & COOKIES</span>

            <h2 id="cookie-title">Jouw privacy, jouw keuze.</h2>

            <p>
              We gebruiken noodzakelijke cookies om de website goed te
              laten werken. Met jouw toestemming gebruiken we aanvullende
              cookies voor analyse en marketing.
            </p>

            <div className="cookie-actions">
              <button
                type="button"
                className="cookie-button primary"
                onClick={acceptAll}
              >
                Alles accepteren
              </button>

              <button
                type="button"
                className="cookie-button secondary"
                onClick={rejectAll}
              >
                Alles weigeren
              </button>

              <button
                type="button"
                className="cookie-button preferences"
                onClick={() => setPreferencesOpen(true)}
              >
                Voorkeuren
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="cookie-label">COOKIEVOORKEUREN</span>

            <h2 id="cookie-title">Beheer je voorkeuren.</h2>

            <p>
              Bepaal zelf welke aanvullende cookies DJ Digital mag
              gebruiken.
            </p>

            <div className="cookie-preference">
              <div>
                <strong>Noodzakelijke cookies</strong>
                <span>
                  Nodig voor de basisfunctionaliteit van de website.
                </span>
              </div>

              <span className="cookie-required">Altijd actief</span>
            </div>

            <div className="cookie-preference">
              <div>
                <strong>Analyse</strong>
                <span>
                  Helpt ons begrijpen hoe de website wordt gebruikt.
                </span>
              </div>

              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Analytische cookies"
              />
            </div>

            <div className="cookie-preference">
              <div>
                <strong>Marketing</strong>
                <span>
                  Kan worden gebruikt om advertenties en campagnes te meten.
                </span>
              </div>

              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Marketingcookies"
              />
            </div>

            <div className="cookie-actions">
              <button
                type="button"
                className="cookie-button primary"
                onClick={savePreferences}
              >
                Voorkeuren opslaan
              </button>

              <button
                type="button"
                className="cookie-button secondary"
                onClick={rejectAll}
              >
                Alles weigeren
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}