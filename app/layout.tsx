import "@/styles/globals.css";
import { MontserratFont } from "@/components/ui/fonts";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

import Header from "@/components/ui/header";

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
        <Header />
        <img
          className="hidden"
          src="https://tracker.metricool.com/c3po.jpg?hash=a892bac29f6bda6ed0763d28ba9fb14e"
        />
        {children}
      </body>
    </html>
  );
}
