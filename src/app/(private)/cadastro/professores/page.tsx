import { DataTableProfessores } from "@/components/pages/cadastro/professores/DataTableProfessores";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Professores | Athus",
	description: "Tela de professores da Athus",
};

const Professores = () => {
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-8">
				<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Professores</h1>
				<Button size="lg" className="cursor-pointer" >
					<CirclePlus />
					Cadastrar
				</Button>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTableProfessores />
			</div>
		</div>
	)
}

export default Professores;
