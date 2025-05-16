'use client';

import { useTheme } from '@/context/ThemeContext';
import { ReactNode } from 'react';
import { NavBar } from './navbar/NavBar';
import { SideBar } from './sidebar/SideBar';

export const LayoutPrincipal = ({ children }: Readonly<{ children: ReactNode }>) => {
	const { theme } = useTheme();

	return (
		<div className="flex h-screen p-4" data-theme={theme}>
			<SideBar />
			<div className="flex flex-col flex-1">
				<NavBar />
				<main className="flex-1 overflow-auto pr-6 pl-6 pt-6">
					{children}
				</main>
			</div>
		</div>
	);
};
