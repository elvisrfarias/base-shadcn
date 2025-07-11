'use client';

import { useEffect, useState } from "react";
import { DataTable } from "../../../datatable/DataTable";
import { SkeletonDataTable } from "../../../datatable/SkeletonDataTable";

export const DataTableProfessores = () => {
	const [dados, setDados] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const columnsProfessores: any[] = []

	const getProfessores = async () => {
		try {
			const res = await fetch("/api/professores");
			const data = await res.json();

			setDados(data);
			setIsLoading(false);
		} catch (error: any) {
			throw new Error("Erro ao buscar professores", error);
		}
	};

	useEffect(() => {
		getProfessores();
	}, []);

	return (
		<>
			{isLoading
				? <SkeletonDataTable />
				: <DataTable
					columns={columnsProfessores}
					data={dados}
				/>
			}
		</>
	);
}
