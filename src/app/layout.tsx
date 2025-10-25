import "@/style/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dashboard | base",
  description: "Dashboard base para iniciar novos projetos",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="antialiased" cz-shortcut-listen="true">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
