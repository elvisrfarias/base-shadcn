import { auth } from "@/auth";
import { LayoutAthus } from "@/components/layout/LayoutAthus";
import { ThemeProvider } from "@/context/ThemeContext";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import "@/style/globals.css";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Dashboard | Athus",
	description: "Dashboard Athus",
};

export default async function CustomLayout({ children }: { children: React.ReactNode }) {
	const session = await auth();

	if (!session) {
		return redirect('/');
	}

	return (
		<ThemeProvider>
			<NextAuthSessionProvider session={session}>
				<LayoutAthus>{children}</LayoutAthus>
			</NextAuthSessionProvider>
		</ThemeProvider>
	);
}
