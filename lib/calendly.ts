"use client";

const CALENDLY_MODAL_ID = "calendly-themed-modal";
const CALENDLY_THEME_STYLE_ID = "calendly-themed-modal-styles";

function getEmbedUrl(url: string) {
  const embedUrl = new URL(url);
  embedUrl.searchParams.set("embed_domain", window.location.hostname);
  embedUrl.searchParams.set("embed_type", "Inline");
  return embedUrl.toString();
}

function ensureCalendlyModalStyles() {
  if (document.getElementById(CALENDLY_THEME_STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = CALENDLY_THEME_STYLE_ID;
  style.textContent = `
    .zp-calendly-overlay {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      display: grid;
      place-items: center;
      padding: clamp(14px, 4vw, 32px);
      background:
        radial-gradient(circle at 10% 80%, rgba(215, 28, 60, 0.18), transparent 34%),
        rgba(0, 0, 0, 0.76);
      backdrop-filter: blur(8px);
    }

    .zp-calendly-dialog {
      width: min(1040px, 100%);
      height: min(760px, calc(100dvh - clamp(28px, 8vw, 64px)));
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: clamp(24px, 3vw, 42px);
      background: #030305;
      box-shadow:
        inset 0 1px rgba(255, 255, 255, 0.08),
        0 30px 90px rgba(0, 0, 0, 0.72),
        0 0 0 1px rgba(215, 28, 60, 0.1);
    }

    .zp-calendly-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      min-height: clamp(86px, 10vw, 104px);
      padding: clamp(18px, 2.6vw, 24px) clamp(22px, 3.2vw, 30px);
      background: linear-gradient(180deg, #040405 0%, #030303 100%);
      color: #fff;
    }

    .zp-calendly-eyebrow {
      margin: 0 0 14px;
      color: #ff1230;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5em;
      line-height: 1;
      text-transform: uppercase;
    }

    .zp-calendly-title {
      margin: 0;
      color: rgba(255, 255, 255, 0.94);
      font-size: clamp(24px, 2.2vw, 28px);
      font-weight: 500;
      line-height: 1.18;
    }

    .zp-calendly-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      width: 56px;
      height: 56px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.02);
      color: rgba(255, 255, 255, 0.72);
      cursor: pointer;
      font-size: 32px;
      font-weight: 200;
      line-height: 1;
      box-shadow: none;
    }

    .zp-calendly-close:hover,
    .zp-calendly-close:focus-visible {
      border-color: rgba(255, 255, 255, 0.24);
      background: rgba(255, 255, 255, 0.06);
      color: #fff;
      outline: none;
    }

    .zp-calendly-frame-wrap {
      height: calc(100% - clamp(86px, 10vw, 104px));
      background: #f7f7f8;
    }

    .zp-calendly-frame {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      background: #fff;
    }

    body.zp-calendly-open {
      overflow: hidden;
    }

    @media (max-width: 640px) {
      .zp-calendly-overlay {
        padding: 10px;
      }

      .zp-calendly-dialog {
        height: calc(100dvh - 20px);
        border-radius: 26px;
      }

      .zp-calendly-header {
        min-height: 104px;
        padding: 20px;
      }

      .zp-calendly-eyebrow {
        margin-bottom: 10px;
        font-size: 11px;
        letter-spacing: 0.36em;
      }

      .zp-calendly-title {
        font-size: 21px;
      }

      .zp-calendly-close {
        width: 48px;
        height: 48px;
        font-size: 26px;
      }

      .zp-calendly-frame-wrap {
        height: calc(100% - 104px);
      }
    }
  `;

  document.head.appendChild(style);
}

function closeCalendlyPopup() {
  document.getElementById(CALENDLY_MODAL_ID)?.remove();
  document.body.classList.remove("zp-calendly-open");
  document.removeEventListener("keydown", onCalendlyKeyDown);
}

function onCalendlyKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeCalendlyPopup();
  }
}

export async function openCalendlyPopup(url: string) {
  if (typeof window === "undefined") {
    return;
  }

  ensureCalendlyModalStyles();
  closeCalendlyPopup();

  const overlay = document.createElement("div");
  overlay.id = CALENDLY_MODAL_ID;
  overlay.className = "zp-calendly-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "calendly-themed-modal-title");

  overlay.innerHTML = `
    <div class="zp-calendly-dialog">
      <div class="zp-calendly-header">
        <div>
          <p class="zp-calendly-eyebrow">Schedule a call</p>
          <h2 id="calendly-themed-modal-title" class="zp-calendly-title">Book time with Zarrar Palekar</h2>
        </div>
        <button type="button" class="zp-calendly-close" aria-label="Close scheduling popup">&times;</button>
      </div>
      <div class="zp-calendly-frame-wrap">
        <iframe class="zp-calendly-frame" title="Schedule a call with Zarrar Palekar" loading="eager"></iframe>
      </div>
    </div>
  `;

  const iframe = overlay.querySelector<HTMLIFrameElement>(".zp-calendly-frame");
  if (iframe) {
    iframe.src = getEmbedUrl(url);
  }

  overlay.querySelector(".zp-calendly-close")?.addEventListener("click", closeCalendlyPopup);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeCalendlyPopup();
    }
  });

  document.body.appendChild(overlay);
  document.body.classList.add("zp-calendly-open");
  document.addEventListener("keydown", onCalendlyKeyDown);
  overlay.querySelector<HTMLButtonElement>(".zp-calendly-close")?.focus();
}

export function registerCalendlyPageHideCleanup() {
  if (typeof window === "undefined") {
    return () => {};
  }

  const cleanup = () => {
    closeCalendlyPopup();
    document.removeEventListener("keydown", onCalendlyKeyDown);
  };

  window.addEventListener("pagehide", cleanup);
  return () => {
    window.removeEventListener("pagehide", cleanup);
    document.removeEventListener("keydown", onCalendlyKeyDown);
  };
}
