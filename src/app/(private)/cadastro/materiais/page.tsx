import { DataTableMateriais } from "@/components/pages/cadastro/materiais/DataTableMateriais";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Materiais | Athus",
	description: "Tela de materiais da Athus",
};

const Material = () => {
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-8">
				<h1 className="text-3xl font-bold text-(--color-text-primary)">Materiais</h1>
				<Button  size="lg" className="cursor-pointer" >
					<CirclePlus />
					Cadastrar
				</Button>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTableMateriais />
			</div>
		</div>
	)
}

export default Material
