'use client';

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import { Logo } from '../ui/Logo';
import { SideBarMenu } from './SideBarMenu';


export const SideBar = () => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	return (
		<div className={`bg-[var(--background)] h-full flex ml-2 mr-2 flex-col transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} divide-x-1`}>
			<section className="flex items-center h-20 p-4">
				<Link href="/dashboard">
					{isCollapsed
						? <Logo sizeNumber={9} />
						: <Logo hasCompanyName />
					}
				</Link>
			</section>
			<SideBarMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
			<footer
				className="flex justify-center p-3 items-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-white  rounded-xl transition cursor-pointer mr-3"
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed
					? <PanelLeftOpen />
					: <PanelLeftClose />
				}
			</footer>
		</div>
	)
}
