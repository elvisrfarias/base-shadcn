import { DataTableCursos } from "@/components/pages/cadastro/cursos/DataTableCursos";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Cursos | Athus",
	description: "Tela de cursos da Athus",
};

const Course = () => {
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-8">
				<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Cursos</h1>
				<Button  size="lg" className="cursor-pointer" >
					<CirclePlus />
					Cadastrar
				</Button>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTableCursos />
			</div>
		</div>
	)
}

export default Course;
