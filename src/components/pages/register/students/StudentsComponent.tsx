'use client';

import { columnsStudents, StudentsType } from "@/app/(auth)/register/students/columnsStudents";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "../../../datatable/DataTable";
import { Button } from "../../../ui/button";
import { SkeletonDataTable } from "../../../datatable/SkeletonDataTable";

export const StudentsComponent = () => {
	const [dados, setDados] = useState<StudentsType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getAlunos = async () => {
		const res = await fetch("/api/students", {
			cache: "no-store",
		});
		if (!res.ok) throw new Error("Erro ao buscar alunos");
		const data = await res.json();
		setDados(data);
		setIsLoading(false);
	};

	useEffect(() => {
		getAlunos()
	}, []);

	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-8">
				<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Alunos</h1>
				<Button>
					<CirclePlus />
					Cadastrar
				</Button>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				{isLoading
					? <SkeletonDataTable />
					: <DataTable
						columns={columnsStudents}
						data={dados}
						searchFields={["nome", "responsavel", "email", "telefonecasa", "telefonecelular", "telefonecomercial"]}
						defaultColumnVisibility={{
							id: false,
							telefonecelular: false,
							dataRegistro: false,
							dataAlteracao: false,
							observacao: false,
							endereco: false,
							bairro: false,
							cidade: false,
							uf: false,
							numero: false,
							cep: false,
						}}
					/>
				}

			</div>
		</div>
	);
}
