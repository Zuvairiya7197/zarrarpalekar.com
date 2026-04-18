import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-10",
        className,
      )}
      {...props}
    />
  );
}
