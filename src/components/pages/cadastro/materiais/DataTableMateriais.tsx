'use client';

import { DataTable } from "@/components/datatable/DataTable";
import { SkeletonDataTable } from "@/components/datatable/SkeletonDataTable";
import { useEffect, useState } from "react";


export const DataTableMateriais = () => {
	const [dados, setDados] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const columnsMateriais: any[] = [];

	const getMateriais = async () => {
		try {
			const res = await fetch("/api/materiais");
			const data = await res.json();

			setDados(data);
			setIsLoading(false);
		} catch (error: any) {
			throw new Error("Erro ao buscar materiais", error);
		}
	};

	useEffect(() => {
		getMateriais();
	}, []);

	return (
		<>
			{isLoading
				? <SkeletonDataTable />
				: <DataTable
					columns={columnsMateriais}
					data={dados}
				/>
			}
		</>
	);
}