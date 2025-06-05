import { DataTableTurmas } from "@/components/pages/cadastro/turmas/DataTableTurmas";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Turmas | Athus",
	description: "Tela de turmas da Athus",
};

const Turmas = () => {
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-8">
				<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Turmas</h1>
				<Button size="lg" className="cursor-pointer" >
					<CirclePlus />
					Cadastrar
				</Button>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTableTurmas />
			</div>
		</div>
	)
}

export default Turmas
