'use client';

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Table } from "@tanstack/react-table";
import { Columns3 } from "lucide-react";

interface ViewColumnButtonProps<TData> {
	table: Table<TData>;
}

export function ViewColumnButton<TData>({ table }: ViewColumnButtonProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>

				<div className="flex items-center">
					<HoverCard>
						<HoverCardTrigger>
							<Columns3 size={24} className="cursor-pointer text-primary" />
						</HoverCardTrigger>
						<HoverCardContent>
							Selecione as colunas que deseja visualizar.
						</HoverCardContent>
					</HoverCard>
				</div>

			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{table.getAllColumns()
					.filter((column) => column.getCanHide())
					.map((column) => {
						return (
							<DropdownMenuCheckboxItem
								key={column.id}
								className="capitalize"
								checked={column.getIsVisible()}
								onCheckedChange={(value) => column.toggleVisibility(!!value)}
							>
								{column.id}
							</DropdownMenuCheckboxItem>
						)
					})
				}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
