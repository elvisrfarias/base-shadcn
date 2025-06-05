import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				username: { label: "username", type: "text" },
				password: { label: "password", type: "password" }
			},

			async authorize(credentials, req) {
				const response = await fetch(`https://api.sistema.athus.com/api/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Accept": "*/*"
					},
					body: JSON.stringify({
						username: credentials?.username,
						password: credentials?.password
					})
				});

				const user = await response.json();

				if (response.ok && user) {
					return user;
				} else {
					return 'Usuário ou senha inválidos';
				}
			}
		})
	],
	pages: {
		signIn: "/",
	},
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user);

			return token;
		},

		async session({ session, token }) {
			session = token.user as any;
			return session;
		}
	},
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
