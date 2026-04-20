"use client";

import { useEffect } from "react";

const DEFERRED_STYLES_ID = "deferred-non-critical-styles";

export function DeferredStyles() {
  useEffect(() => {
    if (document.getElementById(DEFERRED_STYLES_ID)) {
      return;
    }

    const link = document.createElement("link");
    link.id = DEFERRED_STYLES_ID;
    link.rel = "stylesheet";
    link.href = "/non-critical.css";
    document.head.appendChild(link);
  }, []);

  return null;
}
