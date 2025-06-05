'use client';

import { useTheme } from '@/context/ThemeContext';
import { ReactNode } from 'react';
import { SideBar } from './sidebar/SideBar';


export const LayoutAthus = ({ children }: Readonly<{ children: ReactNode }>) => {
	const { theme } = useTheme();

	return (
		<div className="flex h-screen" data-theme={theme}>
			<SideBar />
			<div className="flex flex-col flex-1">
				<main className="flex-1 overflow-auto bg-[var(--background)] p-4">
					{children}
				</main>
			</div>
		</div>
	);
};
