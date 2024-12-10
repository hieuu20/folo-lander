import { Footer } from "@/components/layouts";
import React from "react";


export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
