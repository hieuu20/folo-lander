import { Footer, Header } from "@/components/layouts";
import React from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </React.Fragment>
  );
}
