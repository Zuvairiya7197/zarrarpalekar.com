"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let calendlyAssetsPromise: Promise<void> | null = null;
const CALENDLY_THEME_STYLE_ID = "calendly-popup-theme";

function ensureCalendlyStylesheet() {
  const href = "https://assets.calendly.com/assets/external/widget.css";

  if (document.querySelector(`link[href="${href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function ensureCalendlyPopupThemeStyles() {
  if (document.getElementById(CALENDLY_THEME_STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = CALENDLY_THEME_STYLE_ID;
  style.textContent = `
    .calendly-overlay {
      background: rgba(7, 8, 14, 0.8) !important;
      backdrop-filter: blur(10px);
    }

    .calendly-overlay .calendly-popup,
    .calendly-overlay .calendly-popup-content {
      background: transparent !important;
      box-shadow: none !important;
    }

    .calendly-overlay .calendly-popup-content {
      border-radius: 24px !important;
      padding: 10px !important;
      border: 1px solid rgba(255, 96, 118, 0.32) !important;
      background: linear-gradient(
        165deg,
        rgba(18, 20, 34, 0.9) 0%,
        rgba(10, 12, 22, 0.88) 100%
      ) !important;
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 26px 56px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 78, 101, 0.18) !important;
    }

    .calendly-overlay .calendly-popup-content iframe {
      border-radius: 18px !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      background: rgba(10, 12, 22, 0.95) !important;
    }
  `;

  document.head.appendChild(style);
}

function ensureCalendlyAssets() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  ensureCalendlyPopupThemeStyles();

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (calendlyAssetsPromise) {
    return calendlyAssetsPromise;
  }

  calendlyAssetsPromise = new Promise<void>((resolve, reject) => {
    ensureCalendlyStylesheet();

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Failed to load Calendly widget.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly widget."));
    document.body.appendChild(script);
  });

  return calendlyAssetsPromise;
}

export async function openCalendlyPopup(url: string) {
  await ensureCalendlyAssets();
  window.Calendly?.initPopupWidget({ url });
}
