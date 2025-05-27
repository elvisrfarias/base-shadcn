'use client';

import { AlunosType, columnsAlunos } from "@/components/pages/cadastro/alunos/ColumnsAlunos";
import { useEffect, useState } from "react";
import { DataTable } from "../../../datatable/DataTable";
import { SkeletonDataTable } from "../../../datatable/SkeletonDataTable";

export const DataTableAlunos = () => {
	const [dados, setDados] = useState<AlunosType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getAlunos = async () => {
		try {
			const res = await fetch("/api/alunos");
			const data = await res.json();

			setDados(data);
			setIsLoading(false);
		} catch (error: any) {
			throw new Error("Erro ao buscar alunos", error);
		}
	};

	useEffect(() => {
		getAlunos();
	}, []);

	return (
		<>
			{isLoading
				? <SkeletonDataTable />
				: <DataTable
					columns={columnsAlunos}
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
		</>
	);
}
