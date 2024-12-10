import { Footer } from "@/components/layouts";
import React from "react";


export default function ClientLayout({
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
