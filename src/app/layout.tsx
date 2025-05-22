import { ThemeProvider } from "@/context/ThemeContext";
import "@/style/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "900"], // ou os pesos que você realmente vai usar
});

export const metadata: Metadata = {
  title: "Dashboard | Athus",
  description: "Dashboard Athus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} `}>
      <body className="antialiased" cz-shortcut-listen="true">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
