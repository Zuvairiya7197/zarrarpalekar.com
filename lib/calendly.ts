"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let calendlyAssetsPromise: Promise<void> | null = null;

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

function ensureCalendlyAssets() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

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
