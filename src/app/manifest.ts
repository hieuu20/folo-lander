import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FOLO",
    short_name: "FOLO",
    description: "Support creators, join channels, and connect through real conversations. FOLO is built for relationships, not feeds.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    orientation: "portrait",
  };
}
