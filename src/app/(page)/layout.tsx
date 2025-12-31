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

export const metadata: Metadata = {
  title: "FOLO",
  description:
    "Support creators, join channels, and connect through real conversations. FOLO is built for relationships, not feeds.",
  icons: {
    icon: "/icons/shortcut-icon.png",
    shortcut: "/icons/shortcut-icon.png",
    apple: "/icons/shortcut-icon.png",
  },
  openGraph: {
    title: "FOLO - The You Platform Where Creators and Communities Connect",
    description:
      "Support creators, join channels, and connect through real conversations. FOLO is built for relationships, not feeds.",
    images: [
      {
        url: process.env.DOMAIN + '/images/thumb.webp',
        width: 800,
        height: 500,
        alt: "Support creators, join channels, and connect through real conversations. FOLO is built for relationships, not feeds.",
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
    TrackingModel.findOne({}).lean(),
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