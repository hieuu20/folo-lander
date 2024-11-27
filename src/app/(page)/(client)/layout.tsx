import { Footer, Header } from "@/components/layouts";
import React from "react";
import { twMerge } from "tailwind-merge";


export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      <main className={twMerge('pt-16 lg:pt-[72px]')}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
