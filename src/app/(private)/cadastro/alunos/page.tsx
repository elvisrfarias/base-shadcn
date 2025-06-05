import { DataTableAlunos } from "@/components/pages/cadastro/alunos/DataTableAlunos";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Alunos | Athus",
	description: "Tela de alunos da Athus",
};

const Alunos = () => {
	return (
		<div className="w-full mt-6">

			<div className="w-full mt-6">
				<div className="flex justify-between mb-8">
					<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Alunos</h1>
					<Button size="lg" className="cursor-pointer" >
						<CirclePlus />
						Cadastrar
					</Button>
				</div>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTableAlunos />
			</div>
		</div>
	);
};

export default Alunos;
