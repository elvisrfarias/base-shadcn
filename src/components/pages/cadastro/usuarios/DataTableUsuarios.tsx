
'use client';

import { DataTable } from "@/components/datatable/DataTable";
import { SkeletonDataTable } from "@/components/datatable/SkeletonDataTable";
import { useEffect, useState } from "react";
import { ColumnsUsuarios } from "./ColumnsUsuarios";


export const DataTableUsuarios = () => {
	const [dados, setDados] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getUsuarios = async () => {
		try {
			const res = await fetch("/api/usuarios");
			const data = await res.json();

			setDados(data);
			setIsLoading(false);
		} catch (error: any) {
			throw new Error("Erro ao buscar usuários", error);
		}
	};

	useEffect(() => {
		getUsuarios();
	}, []);

	return (
		<>
			{isLoading
				? <SkeletonDataTable />
				: <DataTable
					columns={ColumnsUsuarios}
					data={dados}
				/>
			}
		</>
	);
}