'use client';

import { Cog, LayoutDashboard, UserRoundPlus, Wallet } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarSubmenu } from "./SidebarSubmenu";
import { IMenuItems, ISideBarMenuProps } from "./types";

export const menuItems: IMenuItems[] = [
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
			{ label: "Sair", path: "/", action: "signout" },
		],
	},
];

export const SidebarMenu = ({ isCollapsed, setIsCollapsed }: ISideBarMenuProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});

	useEffect(() => {
		if (!isCollapsed) {
			const openIndexes: { [key: number]: boolean } = {};
			menuItems.forEach((item, index) => {
				if (item.submenu?.some(sub => sub.path === pathname)) {
					openIndexes[index] = true;
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

	const handleLogout = async () => {
		await signOut({ redirect: false });
		router.push("/");
	};

	return (
		<section className="flex-1 overflow-y-auto pt-8 p-2">
			{menuItems.map((item, index) => (
				<SidebarSubmenu
					key={index}
					item={item}
					index={index}
					isCollapsed={isCollapsed}
					isOpen={openSubmenus[index]}
					onClick={handleMenuClick}
					handleLogout={handleLogout}
				/>
			))}
		</section>
	);
};
