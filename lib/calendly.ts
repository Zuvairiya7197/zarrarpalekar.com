"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

let calendlyAssetsPromise: Promise<void> | null = null;
const CALENDLY_THEME_STYLE_ID = "calendly-popup-theme";
const CALENDLY_STYLESHEET_HREF = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

function ensureCalendlyStylesheet() {
  if (document.querySelector(`link[href="${CALENDLY_STYLESHEET_HREF}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_STYLESHEET_HREF;
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
      background: rgba(7, 8, 14, 0.62) !important;
      backdrop-filter: blur(4px);
    }

    .calendly-overlay .calendly-popup,
    .calendly-overlay .calendly-popup-content {
      background: transparent !important;
      box-shadow: none !important;
    }

    .calendly-overlay .calendly-popup-content {
      border-radius: 14px !important;
      padding: 6px !important;
      border: 0 !important;
      background: rgba(10, 12, 22, 0.92) !important;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35) !important;
    }

    .calendly-overlay .calendly-popup-content iframe {
      border-radius: 10px !important;
      border: 0 !important;
      background: #fff !important;
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
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
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
    script.src = CALENDLY_SCRIPT_SRC;
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

function cleanupCalendlyArtifacts() {
  window.Calendly?.closePopupWidget?.();

  document
    .querySelectorAll(".calendly-overlay, .calendly-popup, .calendly-badge-widget")
    .forEach((node) => node.remove());

  document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)?.remove();
  calendlyAssetsPromise = null;
}

export function registerCalendlyPageHideCleanup() {
  if (typeof window === "undefined") {
    return () => {};
  }

  const onPageHide = () => {
    cleanupCalendlyArtifacts();
  };

  window.addEventListener("pagehide", onPageHide);
  return () => {
    window.removeEventListener("pagehide", onPageHide);
  };
}
