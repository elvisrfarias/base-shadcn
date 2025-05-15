'use client';

import { useTheme } from '@/context/ThemeContext';
import { ReactNode } from 'react';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';

export const LayoutPrincipal = ({ children }: Readonly<{ children: ReactNode }>) => {
	const { theme } = useTheme();

	return (
		<div className="flex h-screen" data-theme={theme}>
			<SideBar />
			<div className="flex flex-col flex-1">
				<NavBar />
				<main className="flex-1 overflow-auto bg-gray-100 p-6">
					{children}
				</main>
			</div>
		</div>
	);
};
