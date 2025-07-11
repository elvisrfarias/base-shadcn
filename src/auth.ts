import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  	providers: [
		Credentials({
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

				if (!response.ok || !user) {
					return 'Usuário ou senha inválidos';
				}

				return user;
			}
		}),
        Google
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
})