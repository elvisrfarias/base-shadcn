'use client'

import { OptionsButtonTable } from "@/components/datatable/OptionsButtonTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type UserType = {
	id: string;
	name: string
	email: string
	image: string
	desc: string
}

export const columns: ColumnDef<UserType>[] = [
	{
		accessorKey: "id",
		header: "Código",
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
	},
	{
		accessorKey: "email",
		header: "E-mail",
	},
	{
		accessorKey: "image",
		header: "Imagem",
	},
	{
		accessorKey: "desc",
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
