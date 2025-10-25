import "@/style/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LayoutBase } from "@/components/layout/LayoutBase";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function CustomLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <LayoutBase>{children}</LayoutBase>
    </ThemeProvider>
  );
}
