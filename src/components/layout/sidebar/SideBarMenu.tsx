'use client';

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { menuItems } from "./MenuItems";

interface ISideBarMenuProps {
	isCollapsed: boolean;
	setIsCollapsed: (value: boolean) => void;
}

export const SideBarMenu = ({ isCollapsed, setIsCollapsed }: ISideBarMenuProps) => {
	const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});
	const pathname = usePathname();

	const handleMenuClick = (index: number, hasSubmenu: boolean) => {
		// Se está recolhido e clicaram em um item com submenu
		if (isCollapsed && hasSubmenu) {
			setIsCollapsed(false); // Expande
			setTimeout(() => {
				setOpenSubmenus(prev => ({ ...prev, [index]: true }));
			}, 300); // Espera a animação expandir
		} else if (hasSubmenu) {
			setOpenSubmenus(prev => ({ ...prev, [index]: !prev[index] }));
		}
	};

	return (
		<section className="flex-1 overflow-y-auto pt-8 p-2">
			{menuItems.map((item, index) => {
				const hasSubmenu = !!item.submenu;
				const isActive = item.path && pathname === item.path;

				return (
					<Link key={index} href={item.path || ""}>
						<div key={index} className="group pt-1">
							<div
								className={`flex items-center p-3 cursor-pointer transition-all rounded-xl 
                      ${isCollapsed ? "justify-center" : "gap-2"}
											${isActive
										? "bg-[var(--color-primary)] text-white "
										: "hover:bg-gray-200 text-[--color-text-primary]"}
									`}
								onClick={() => handleMenuClick(index, hasSubmenu)}
							>
								<span>{item.icon}</span>
								{!isCollapsed && (
									<div className="flex justify-between items-center w-full">
										<span className="text-sm">{item.label}</span>
										{hasSubmenu && (
											<span className="ml-auto">
												{openSubmenus[index] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
											</span>
										)}
									</div>
								)}
							</div>

							{/* Submenu */}
							{!isCollapsed && hasSubmenu && openSubmenus[index] && (
								<ul className="ml-8 text-sm text-[var(--color-text-primary)]">
									{item.submenu
										? item.submenu.map((sub, i) => {
											const isSubActive = pathname === sub.path;
											return (
												<Link key={i} href={sub.path}>
													<li className={`cursor-pointer rounded-xl p-2
															${isSubActive
															? "bg-[var(--color-primary)] text-white "
															: "hover:bg-gray-200 text-[--color-text-primary]"}`}>
														{sub.label}
													</li>
												</Link>
											);
										})
										: null
									}
								</ul>
							)}
						</div>
					</Link>
				);
			})}
		</section>
	)
}
