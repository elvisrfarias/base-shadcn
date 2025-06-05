import { Table } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'

interface PaginationTableProps<TData> {
	table: Table<TData>
}

export const PaginationTable = <TData,>({ table }: PaginationTableProps<TData>) => {
	return (
		<div className="flex items-center justify-end space-x-2 py-4">
			<div className="flex-1 text-sm text-muted-foreground">
				Total de linhas: {table.getCoreRowModel().rows.length}
			</div>

			<Button
				size="sm"
				variant={!table.getCanPreviousPage() ? 'outline' : 'default'}
				className="cursor-pointer"
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				<ChevronLeft />
			</Button>
			<Button
				size="sm"
				className="cursor-pointer"
				variant={!table.getCanNextPage() ? 'outline' : 'default'}
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				<ChevronRight />
			</Button>
		</div>
	)
}
