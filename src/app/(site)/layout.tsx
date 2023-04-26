"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NavBar />
        <main className={"mt-24 mx-auto w-5/6 "}>
          <AnimatePresence initial={false} mode="popLayout">
            {children}
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
