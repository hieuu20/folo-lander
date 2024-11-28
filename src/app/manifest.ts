import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KNKY Business",
    short_name: "KNKY Business",
    description: "Let's get KNKY! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    orientation: "portrait",
    icons: [
      {
        src: "/manifest-icon/72.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        src: "/manifest-icon/196.png",
        type: "image/png",
        sizes: "196x196",
      },
      {
        src: "/manifest-icon/512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
