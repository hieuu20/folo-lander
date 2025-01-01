import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KNKY",
    short_name: "KNKY",
    description: "Let's get KNKY! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    orientation: "portrait",
  };
}
