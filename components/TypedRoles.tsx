"use client";

import { useEffect, useState } from "react";

export function TypedRoles({ roles }: { roles: readonly string[] }) {
  const firstRole = roles[0] ?? "";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(firstRole);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (roles.length === 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setDisplayed(firstRole);
      setRoleIndex(0);
      setIsDeleting(false);
      setIsReady(true);
    }, 550);

    return () => window.clearTimeout(timer);
  }, [firstRole, roles.length]);

  useEffect(() => {
    if (!isReady || roles.length === 0) {
      return;
    }

    const current = roles[roleIndex] ?? "";
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && displayed !== current) {
          setDisplayed(current.slice(0, displayed.length + 1));
          return;
        }

        if (!isDeleting && displayed === current) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      },
      !isDeleting && displayed === current ? 1400 : isDeleting ? 35 : 85,
    );

    return () => window.clearTimeout(timeout);
  }, [displayed, isDeleting, isReady, roleIndex, roles]);

  return (
    <span className="inline-flex items-center">
      {displayed}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-[rgb(var(--accent-secondary))]" />
    </span>
  );
}
