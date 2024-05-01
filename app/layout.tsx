/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import "@/styles/globals.css";
import { MontserratFont } from "@/components/ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

import { Metadata } from "next";
import { cn } from "@/lib/utils";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "RPM: Bienvenido!",
  description: "Resultados Publicitarios Medellín",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          MontserratFont.className,
        )}
      >
        <SpeedInsights />
        <Header />
        {/* Metricool Tracker */}
        <img
          className="hidden"
          src="https://tracker.metricool.com/c3po.jpg?hash=a892bac29f6bda6ed0763d28ba9fb14e"
        />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
