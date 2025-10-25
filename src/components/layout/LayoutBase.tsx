"use client";

import { useTheme } from "@/context/ThemeContext";
import { ReactNode } from "react";
import { Sidebar } from "./sidebar/Sidebar";

export const LayoutBase = ({ children }: Readonly<{ children: ReactNode }>) => {
  const { theme } = useTheme();

  return (
    <div className="flex h-screen" data-theme={theme}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-auto bg-background p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
