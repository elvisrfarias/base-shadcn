"use client"

import {
	ColumnDef,
	FilterFnOption,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from "@tanstack/react-table"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import { useState } from "react"
import { InputFilterTable } from "./InputFilterTable"
import { PaginationTable } from "./PaginationTable"

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	searchFields?: string[];
	pageSize?: number;
	defaultSearsh?: string;
}

export function DataTable<TData, TValue>({ columns, data, searchFields = [], pageSize = 10, defaultSearsh = "" }: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = useState(defaultSearsh);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

	const table = useReactTable({
		data,
		columns,
		initialState: {
			pagination: {
				pageSize,
			},
		},
		state: {
			sorting,
			globalFilter,
			columnVisibility,
		},
		filterFns: {
			fuzzy: (row, _, search) => {
				const data = row.original;
				console.log(data)

				return searchFields.some(field => data[field]?.toString().toLowerCase().includes(search.toLowerCase()));
			}
		},
		globalFilterFn: "fuzzy" as FilterFnOption<TData>,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onGlobalFilterChange: setGlobalFilter,
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
	})

	return (
		<>
			<InputFilterTable
				table={table}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				hasButtonView />

			<div className="rounded-md border h-134">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>

					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center text-gray-400">
									Sem resultados
								</TableCell>
							</TableRow>
						)}
					</TableBody>

				</Table>
			</div>

			<PaginationTable table={table} />
		</>
	)
}
