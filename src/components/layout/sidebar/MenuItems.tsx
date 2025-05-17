import { LayoutDashboard, UserRoundPlus, Wallet } from 'lucide-react';
import { IMenuItems } from "./types";

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
			{ label: "Alunos", path: "/register/students" },
			{ label: "Professores", path: "/register/teachers" },
			{ label: "Usuários", path: "/register/users" },
			{ label: "Cursos", path: "/register/courses" },
			{ label: "Materiais", path: "/register/materiais" },
			{ label: "Turmas", path: "/register/classe" },
		],
	},
	{
		label: "Financeiro",
		icon: <Wallet size={20} />,
		submenu: [
			{ label: "Boletos", path: "/financial/bills" },
			{ label: "Cobrança", path: "/financial/charge" },
			{ label: "Transações", path: "/financial/transactions" },
			{ label: "Despesas", path: "/financial/expenses" },
			{ label: "A pagar", path: "/financial/topay" },
			{ label: "A receber", path: "/financial/toreceive" },
		],
	},
];