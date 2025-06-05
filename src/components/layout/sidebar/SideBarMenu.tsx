'use client';

import { ChevronDown, ChevronRight, Cog, LayoutDashboard, UserRoundPlus, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { IMenuItems } from "./types";
interface ISideBarMenuProps {
	isCollapsed: boolean;
	setIsCollapsed: (value: boolean) => void;
}

const menuItems: IMenuItems[] = [
	{
		label: "Dashboard",
		icon: <LayoutDashboard size={20} />,
		path: "/dashboard",
	},
	{
		label: "Cadastros",
		icon: <UserRoundPlus size={20} />,
		submenu: [
			{ label: "Alunos", path: "/cadastro/alunos" },
			{ label: "Professores", path: "/cadastro/professores" },
			{ label: "Usuários", path: "/cadastro/usuarios" },
			{ label: "Cursos", path: "/cadastro/cursos" },
			{ label: "Materiais", path: "/cadastro/materiais" },
			{ label: "Turmas", path: "/cadastro/turmas" },
		],
	},
	{
		label: "Financeiro",
		icon: <Wallet size={20} />,
		submenu: [
			{ label: "Boletos", path: "/financeiro/boletos" },
			{ label: "Cobrança", path: "/financeiro/cobranca" },
			{ label: "Transações", path: "/financeiro/trancacoes" },
			{ label: "Despesas", path: "/financeiro/despesas" },
			{ label: "A pagar", path: "/financeiro/apagar" },
			{ label: "A receber", path: "/financeiro/areceber" },
		],
	},
	{
		label: "Configurações",
		icon: <Cog size={20} />,
		submenu: [
			{ label: "Perfil", path: "/configuracao/perfil" },
		],
	},
];

export const SideBarMenu = ({ isCollapsed, setIsCollapsed }: ISideBarMenuProps) => {
	const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});
	const pathname = usePathname();

	useEffect(() => {
		if (!isCollapsed) {
			const openIndexes: { [key: number]: boolean } = {};

			menuItems.map((item, index) => {
				if (item.submenu) {
					const hasActiveSub = item.submenu.some(sub => sub.path === pathname);
					if (hasActiveSub) {
						openIndexes[index] = true;
					}
				}
			});

			setOpenSubmenus(openIndexes);
		}
	}, [pathname, isCollapsed]);

	const handleMenuClick = (index: number, hasSubmenu: boolean) => {
		if (isCollapsed && hasSubmenu) {
			setIsCollapsed(false);
			setTimeout(() => {
				setOpenSubmenus(prev => ({ ...prev, [index]: true }));
			}, 300);
		} else if (hasSubmenu) {
			setOpenSubmenus(prev => ({ ...prev, [index]: !prev[index] }));
		}
	};

	return (
		<section className="flex-1 overflow-y-auto pt-8 p-2">
			{menuItems.map((item, index) => {
				const hasSubmenu = !!item.submenu;
				const isActive = item.path && pathname === item.path;

				const MenuContent = (
					<div className={`flex items-center p-3 mt-1 cursor-pointer transition-all rounded-xl ${isCollapsed ? "justify-center" : "gap-2"} 
						${isActive
							? "bg-[var(--color-primary)] text-white hover:text-gray-200"
							: "hover:bg-gray-200 text-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"}
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
				);

				return (
					<div key={index} className="group pt-1">
						{/* Se tem path direto e não tem submenu, vira Link */}
						{item.path && !hasSubmenu
							? <Link href={item.path}> {MenuContent} </Link>
							: MenuContent
						}

						{/* Submenu */}
						{!isCollapsed && hasSubmenu && openSubmenus[index] && (
							<ul className="ml-8 text-sm text-[var(--color-text-white)]">
								{item.submenu?.map((sub, i) => {
									const isSubActive = pathname === sub.path;
									return (
										<li key={i}>
											<Link href={sub.path}>
												<div className={`cursor-pointer rounded-xl p-3 mt-1 ${isSubActive
													? "bg-[var(--color-primary)] text-white hover:text-gray-200"
													: "hover:bg-gray-200 text-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"}`}
												>
													{sub.label}
												</div>
											</Link>
										</li>
									);
								})}
							</ul>
						)}

					</div>
				);
			})}
		</section>
	);
};
