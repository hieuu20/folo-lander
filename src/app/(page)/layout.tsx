import "@/styles/globals.css";
import "@mantine/core/styles.layer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { Metadata } from "next";
import Script from "next/script";
import { theme } from "@/lib/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ProgressBarProvider } from "@/lib/ProgressBarProvider";
import localFont from 'next/font/local';
import AppProvider from "../context/AppContext";
import { ToastContainer } from 'react-toastify';
import { getSystemSetting } from "@/service/systemSetting";
import { getUserDetail } from "@/service/user";

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export const myFont = localFont({
  src: [
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFDisplay/SF-Pro-Display-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-myfont', // để dùng với Tailwind
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [setting, profile] = await Promise.all([
    getSystemSetting(),
    getUserDetail(),
  ]);

  return (
    <html lang="en" className={myFont.variable}>
      <head>
        <ColorSchemeScript />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Folo" />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${setting?.tracking?.googleAnalytics.ga4Id || setting?.tracking?.googleAnalytics.uaId}`}
        />

        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${setting?.tracking?.googleAnalytics.ga4Id || setting?.tracking?.googleAnalytics.uaId}');
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <ProgressBarProvider>
          <AppProvider setting={setting} initProfile={profile} >
            <ToastContainer />
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </AppProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}