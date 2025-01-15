import "@/styles/globals.css";
import "@mantine/core/styles.layer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";
// import Script from "next/script";
import { theme } from "@/lib/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ProgressBarProvider } from "@/lib/ProgressBarProvider";

export const metadata: Metadata = {
  title: "KNKY",
  description:
    "Let's get KNKY! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
  icons: {
    icon: "/icons/shortcut-icon.png",
    shortcut: "/icons/shortcut-icon.png",
    apple: "/icons/shortcut-icon.png",
  },
  openGraph: {
    title: "KNKY",
    description:
      "Let's get KNKY! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
    images: [
      {
        url: process.env.DOMAIN + '/images/thumb.png',
        width: 800,
        height: 500,
        alt: "Let's get KNKY! A private, secure and feature-packed platform to Create, Consume & Discover people, content & experiences ;)",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KNKY" />

        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-D8RVL2BLVD`}
        />

        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-D8RVL2BLVD');
            `,
          }}
        /> */}
      </head>
      <body className={`antialiased`}>
         <ProgressBarProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
         </ProgressBarProvider>
      </body>
    </html>
  );
}
