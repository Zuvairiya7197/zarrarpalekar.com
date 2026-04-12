import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zarrar Palekar Portfolio",
    short_name: "Zarrar",
    description: "Premium single-page portfolio for Zarrar Palekar.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fc",
    theme_color: "#0e7490",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
