import "@/styles/globals.css";
import "@mantine/core/styles.layer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Metadata } from "next";
import Script from "next/script";
import { theme } from "@/lib/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ProgressBarProvider } from "@/lib/ProgressBarProvider";
import { connectDB } from "../api/_db/connect";
import { ITracking, TrackingModel } from "../api/_entities";
import { SECTION_TYPE } from "@/utils";

export const metadata: Metadata = {
  title: "Folo",
  description:
    "Let's get Folo! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
  icons: {
    icon: "/icons/shortcut-icon.png",
    shortcut: "/icons/shortcut-icon.png",
    apple: "/icons/shortcut-icon.png",
  },
  openGraph: {
    title: "Premium Starts With You 👑 - Creators earn, fans experience. Join the award winning social marketplace! 🏆",
    description:
      "Let's get Folo! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
    images: [
      {
        url: process.env.DOMAIN + '/images/thumb.webp',
        width: 800,
        height: 500,
        alt: "Let's get Folo! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectDB();

  const [trackingResponse] = await Promise.all([
    TrackingModel.findOne({ type: SECTION_TYPE.CREATOR }).lean(),
  ]);

  const tracking = JSON.parse(JSON.stringify(trackingResponse)) as ITracking;

  // console.log({ tracking });

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Folo" />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${tracking.ga4Tracking || tracking.uaTracking}`}
        />

        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${tracking.ga4Tracking || tracking.uaTracking}');
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <ProgressBarProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}