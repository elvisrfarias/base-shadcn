'use client'

import { OptionsButtonTable } from "@/components/datatable/OptionsButtonTable";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type AlunosType = {
	id: number;
	nome: string;
	responsavel: string;
	email: string;
	telefonecasa: string;
	telefonecelular: string;
	telefonecomercial: string;
	dataNascimento: string;
	dataRegistro: string;
	dataAlteracao: string;
	observacao: string;
	endereco: string;
	bairro: string;
	cidade: string;
	uf: string;
	numero: string;
	cep: string;
	ativo: boolean;
}

export const columnsAlunos: ColumnDef<AlunosType>[] = [
	{
		accessorKey: "id",
		id: "id",
		header: "Código",
	},
	{
		accessorKey: "nome",
		id: "nome",
		header: ({ column }) => {
			return (
				<div
					className="flex items-center justy-center cursor-pointer w-12"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Nome
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</div>
			)
		},
	},
	{
		accessorKey: "responsavel",
		id: "responsavel",
		header: ({ column }) => {
			return (
				<div
					className="flex items-center justy-center cursor-pointer w-12"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Responsável
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</div>
			)
		},
	},
	{
		accessorKey: "telefonecasa",
		id: "telefonecasa",
		header: "Telefone Casa",
	},
	{
		accessorKey: "telefonecelular",
		id: "telefonecelular",
		header: "Telefone Celular",
	},
	{
		accessorKey: "telefonecomercial",
		id: "telefonecomercial",
		header: "Telefone Comercial",
	},
	{
		accessorKey: "dataNascimento",
		id: "dataNascimento",
		header: ({ column }) => {
			return (
				<div
					className="flex items-center justy-center cursor-pointer w-24"
					onClick={column.getToggleSortingHandler()}
				>
					Data Nascimento
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original.dataNascimento;

			const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric"
			}).format(new Date(data));

			return dataFormatada;
		}
	},
	{
		accessorKey: "dataRegistro",
		id: "dataRegistro",
		header: "Data Registro",
	},
	{
		accessorKey: "dataAlteracao",
		id: "dataAlteracao",
		header: "Data Alteração",
	},
	{
		accessorKey: "observacao",
		id: "observacao",
		header: "Observação",
	},
	{
		accessorKey: "endereco",
		id: "endereco",
		header: "Endereço",
	},
	{
		accessorKey: "bairro",
		id: "bairro",
		header: "Bairro",
	},
	{
		accessorKey: "cidade",
		id: "cidade",
		header: "Cidade",
	},
	{
		accessorKey: "uf",
		id: "uf",
		header: "UF",
	},
	{
		accessorKey: "numero",
		id: "numero",
		header: "Número",
		cell: ({ row }) => {
			const itemOption = row.original
			return (
				itemOption.numero
			)
		}
	},
	{
		accessorKey: "cep",
		id: "cep",
		header: "CEP",
		cell: ({ row }) => {
			const itemOption = row.original
			return (
				itemOption.cep
			)
		}
	},
	{
		accessorKey: "ativo",
		id: "ativo",
		header: ({ column }) => {
			return (
				<div
					className="flex items-center justy-center cursor-pointer w-24"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Ativo
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</div>
			)
		},
		cell: ({ row }) => {
			const itemOption = row.original
			return (
				<Badge
					variant={"secondary"}
					className={itemOption.ativo
						? "bg-green-500 text-white font-bold"
						: "bg-red-500 text-white font-bold"
					}
				>
					{itemOption.ativo ? "Sim" : "Não"}
				</Badge>
			)
		}
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
