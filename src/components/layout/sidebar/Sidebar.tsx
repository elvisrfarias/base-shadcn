'use client';

import AvatarCustom from '@/components/AvatarCustom';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import { SidebarMenu } from './SidebarMenu';


export const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	return (
		<div className={`bg-background h-full flex ml-2 mr-2 flex-col transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} divide-x`}>
			<section className="flex items-center h-20 p-4">
				<Link href="/dashboard">
					{isCollapsed
						? <AvatarCustom />
						: (
							<div className="overflow-hidden text-ellipsis whitespace-nowrap">
								<h3 className="text-lg font-bold text-gray-700">Athus - Concórdia</h3>
							</div>
						)
					}
				</Link>
			</section>

			<SidebarMenu
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
			/>

			<footer
				className="flex justify-center p-3 items-center text-(--color-text-primary) hover:bg-primary hover:text-white  rounded-xl transition cursor-pointer mr-3"
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
