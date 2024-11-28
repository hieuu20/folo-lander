import "@/styles/globals.css";
import '@mantine/core/styles.layer.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";
// import Script from "next/script";
import { theme } from "@/lib/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "KNKY Business",
  description: "Manage your creators, employees, and revenue with precision and ease on KNKY!",
  icons: {
    icon: "/icons/shortcut-icon.png",
    shortcut: "/icons/shortcut-icon.png",
    apple: "/icons/shortcut-icon.png",
  },
  openGraph: {
    title: "KNKY Business",
    description: "Manage your creators, employees, and revenue with precision and ease on KNKY!",
    images: [
      {
        url: "https://knky.co/business-thumb.png",
        width: 800,
        height: 500,
        alt: "Manage your creators, employees, and revenue with precision and ease on KNKY!",
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
        <meta name="apple-mobile-web-app-title" content="KNKY Business" />

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
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
