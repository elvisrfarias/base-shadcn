'use client';

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import { Logo } from '../../ui/Logo';
import { SideBarMenu } from './SideBarMenu';



export const SideBar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className={`bg-[var(--color-primary)] h-full transition-all duration-300 flex flex-col border-1 border-gray-200 rounded-xl shadow-sm ${isCollapsed ? "w-16" : "w-64"}`}>

			<section className="flex items-center h-20 p-4">
				<Link href="/dashboard">
					{isCollapsed
						? <Logo sizeNumber={9} />
						: <Logo hasCompanyName />
					}
				</Link>
			</section>

			<SideBarMenu
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
			/>

			<button
				className="flex justify-center items-center text-white hover:bg-white hover:text-[var(--color-text-primary)] p-3 rounded-sm transition cursor-pointer"
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed
					? <PanelLeftOpen />
					: <PanelLeftClose />
				}
			</button>
		</div>
	)
}
