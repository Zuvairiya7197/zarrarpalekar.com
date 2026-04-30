let hasRegisteredCalendlyCleanup = false;

export async function openDeferredCalendly(url: string) {
  const { openCalendlyPopup, registerCalendlyPageHideCleanup } = await import("@/lib/calendly");

  if (!hasRegisteredCalendlyCleanup) {
    registerCalendlyPageHideCleanup();
    hasRegisteredCalendlyCleanup = true;
  }

  await openCalendlyPopup(url);
}
