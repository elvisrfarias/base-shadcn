'use client';

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenuItems } from "./types";

interface SidebarSubmenuProps {
	item: IMenuItems;
	index: number;
	isCollapsed: boolean;
	isOpen: boolean;
	onClick: (index: number, hasSubmenu: boolean) => void;
	handleLogout: () => void;
}

export const SidebarSubmenu = ({
	item,
	index,
	isCollapsed,
	isOpen,
	onClick,
	handleLogout,
}: SidebarSubmenuProps) => {
	const pathname = usePathname();
	const hasSubmenu = !!item.submenu;
	const isActive = item.path && pathname === item.path;

	const renderSubmenu = () => {
		if (isCollapsed || !hasSubmenu || !isOpen) return null;

		return (
			<ul className="ml-8 text-sm text-[var(--color-text-white)]">
				{item.submenu?.map((sub, i) => {
					const isSubActive = pathname === sub.path;
					const baseStyle = "cursor-pointer rounded-xl p-3 mt-1";
					const activeStyle = isSubActive
						? "bg-[var(--color-primary)] text-white hover:text-gray-200"
						: "hover:bg-gray-200 text-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]";

					if (sub.action === "signout") {
						return (
							<li key={i}>
								<div
									onClick={handleLogout}
									className={`${baseStyle} text-[var(--color-text-primary)]`}
								>
									{sub.label}
								</div>
							</li>
						);
					}

					return (
						<li key={i}>
							<Link href={sub.path}>
								<div className={`${baseStyle} ${activeStyle}`}>
									{sub.label}
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		);
	};

	const MenuContent = (
		<div
			className={`flex items-center p-3 mt-1 cursor-pointer transition-all rounded-xl ${isCollapsed ? "justify-center" : "gap-2"} ${isActive
				? "bg-[var(--color-primary)] text-white hover:text-gray-200"
				: "hover:bg-gray-200 text-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
				}`}
			onClick={() => onClick(index, hasSubmenu)}
		>
			<span>{item.icon}</span>
			{!isCollapsed && (
				<div className="flex justify-between items-center w-full">
					<span className="text-sm">{item.label}</span>
					{hasSubmenu && (
						<span className="ml-auto">
							{isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
						</span>
					)}
				</div>
			)}
		</div>
	);

	return (
		<div className="group pt-1">
			{item.path && !hasSubmenu ? (
				<Link href={item.path}>{MenuContent}</Link>
			) : (
				MenuContent
			)}
			{renderSubmenu()}
		</div>
	);
};
