import type { Metadata } from "next";
import "./globals.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Ticket Reservation",
  description: "Ticket Reservation - Demo project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"app-layout"}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>

    </html>
  );
}
