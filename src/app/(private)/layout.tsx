import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/style/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard | Athus",
	description: "Dashboard Athus",
};

export default function CustomLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<LayoutPrincipal>{children}</LayoutPrincipal>
		</ThemeProvider>
	);
}
