import { ThemeProvider } from "@/context/ThemeContext";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import "@/style/globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Poppins } from "next/font/google";
import { nextAuthOptions } from "./api/auth/[...nextauth]/route";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dashboard | Athus",
  description: "Dashboard Athus",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <html lang="pt-BR" className={`${poppins.variable} `}>
      <body className="antialiased" cz-shortcut-listen="true">
        <ThemeProvider>
          <NextAuthSessionProvider session={session}>{children}</NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
