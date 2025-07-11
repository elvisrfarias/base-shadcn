'use client'

import { OptionsButtonTable } from "@/components/datatable/OptionsButtonTable";
import { ColumnDef } from "@tanstack/react-table";

export type UsuariosType = {
	id: string;
	name: string;
	image: string;
	email: string;
	desc: string;
}

export const ColumnsUsuarios: ColumnDef<UsuariosType>[] = [
	{
		accessorKey: "id",
		id: "id",
		header: "Código",
	},
	{
		accessorKey: "name",
		id: "name",
		header: "Nome",
	},
	{
		accessorKey: "image",
		id: "image",
		header: "Imagem",
	},
	{
		accessorKey: "email",
		id: "email",
		header: "E-mail",
	},
	{
		accessorKey: "desc",
		id: "desc",
		header: "Descrição",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const itemOption = row.original
			return (
				<OptionsButtonTable itemOption={itemOption} />
			)
		},
	},
]
