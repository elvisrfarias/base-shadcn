'use client';

import { DataTable } from "@/components/datatable/DataTable";
import { SkeletonDataTable } from "@/components/datatable/SkeletonDataTable";
import { useEffect, useState } from "react";


export const DataTableTurmas = () => {
	const [dados, setDados] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const columnsTurmas: any[] = [];

	const getTurmas = async () => {
		try {
			const res = await fetch("/api/turmas");
			const data = await res.json();

			setDados([]);
			setIsLoading(false);
		} catch (error: any) {
			throw new Error("Erro ao buscar materiais", error);
		}
	};

	useEffect(() => {
		getTurmas();
	}, []);

	return (
		<>
			{isLoading
				? <SkeletonDataTable />
				: <DataTable
					columns={columnsTurmas}
					data={dados}
				/>
			}
		</>
	);
}