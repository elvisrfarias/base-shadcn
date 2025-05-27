import { DataTableUsuarios } from "@/components/pages/cadastro/usuarios/DataTableUsuarios";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Usuários | Athus",
	description: "Tela de usuários da Athus",
}

const Usuarios = async () => {
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-8">
				<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Usuários</h1>
				<Button>
					<CirclePlus />
					Cadastrar
				</Button>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTableUsuarios />
			</div>
		</div>
	)
}

export default Usuarios;
