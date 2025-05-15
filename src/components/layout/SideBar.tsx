'use client';

import { ChevronDown, ChevronRight, DollarSign, House, PanelLeftClose, PanelLeftOpen, Settings, UserRoundPlus } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import { Logo } from '../ui/Logo';

const menuItems = [
	{
		label: "Dashboard",
		icon: <House size={20} />,
		path: "/",
	},
	{
		label: "Cadastros",
		icon: <UserRoundPlus size={20} />,
		submenu: [
			{ label: "Alunos", path: "/register/students" },
			{ label: "Professores", path: "/register/teachers" },
			{ label: "Usuários", path: "/register/users" },
			{ label: "Cursos", path: "/register/courses" },
			{ label: "Materiais", path: "/register/materiais" },
			{ label: "Turmas", path: "/register/classes" },
		],
	},
	{
		label: "Financeiro",
		icon: <DollarSign size={20} />,
		submenu: [
			{ label: "Boletos", path: "/financial/bills" },
			{ label: "Cobrança", path: "/financial/charge" },
			{ label: "Transações", path: "/financial/transactions" },
			{ label: "Despesas", path: "/financial/expenses" },
			{ label: "A pagar", path: "/financial/topay" },
			{ label: "A receber", path: "/financial/toreceive" },
		],
	},
	{
		label: "Configurações",
		icon: <Settings size={20} />,
		submenu: [
			{ label: "Perfil", path: "/config/profile" },
			{ label: "Segurança", path: "/config/security" },
		],
	},
];

export const SideBar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});

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
		<aside className={`bg-[var(--foreground)] h-full transition-all duration-300 flex flex-col divide-x-1 divide-gray-200 rounded-xl ${isCollapsed ? "w-16" : "w-64"}`}>
			<section className="flex items-center h-20 p-4">
				<Link href="/">
					{isCollapsed
						? <Logo sizeNumber={9} />
						: <Logo hasCompanyName />
					}
				</Link>
			</section>

			<section className="flex-1 overflow-y-auto pt-8 p-2">
				{menuItems.map((item, index) => {
					const hasSubmenu = !!item.submenu;

					return (
						<div key={index} className="group pt-1">
							<div
								className={`flex items-center p-3 cursor-pointer hover:bg-[var(--color-primary)] text-[var(--color-text-primary)] hover:text-[var(--color-text-primary-hover)] transition-all rounded 
                      ${isCollapsed ? "justify-center" : "gap-2"}`}
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
									{item.submenu.map((sub, i) => (
										<li key={i} className="p-2 hover:bg-[var(--color-primary)] hover:text-[var(--color-text-primary-hover)] cursor-pointer rounded p-2">
											{sub.label}
										</li>
									))}
								</ul>
							)}
						</div>
					);
				})}
			</section>

			<button
				className="flex justify-center items-center bg-[var(--color-primary)] text-white p-2 transition cursor-pointer"
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed
					? <PanelLeftOpen />
					: <PanelLeftClose />
				}
			</button>
		</aside>
	)
}
