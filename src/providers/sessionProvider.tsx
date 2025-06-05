'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface NextAuthSessionProviderProps {
	children: React.ReactNode;
	session?: Session | null;
}

const NextAuthSessionProvider = ({ children, session }: NextAuthSessionProviderProps) => {
	return (
		<SessionProvider session={session}>
			{children}
		</SessionProvider>
	)
}

export default NextAuthSessionProvider;