import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

interface PaginationTableProps<TData> {
	table: Table<TData>
}

export const PaginationTable = <TData,>({ table }: PaginationTableProps<TData>) => {
	const pageIndex = table.getState().pagination.pageIndex
	const pageCount = table.getPageCount()

	const getPageNumbers = () => {
		const pages: number[] = []
		const maxPagesToShow = 3;

		let startPage = Math.max(0, pageIndex - Math.floor(maxPagesToShow / 2));
		let endPage = Math.min(pageCount, startPage + maxPagesToShow);

		// Ajusta para trás se estiver no final
		if (endPage - startPage < maxPagesToShow && endPage === pageCount) {
			startPage = Math.max(0, endPage - maxPagesToShow);
		}

		for (let i = startPage; i < endPage; i++) {
			pages.push(i);
		}

		return pages;
	}

	const pages = getPageNumbers();

	const renderPaginationItem = (pageNumber: number, label: string | number, isActive: boolean = false) => (
		<button
			key={pageNumber}
			onClick={() => table.setPageIndex(pageNumber)}
			className={`
        h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
        ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        ${isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground"}
      `}
			aria-current={isActive ? "page" : undefined}
		>
			{label}
		</button>
	);

	return (
		<footer className="flex items-center justify-between py-4">
			<div className="text-sm text-muted-foreground">
				Total de linhas: {table.getCoreRowModel().rows.length}
			</div>

			<div className="flex items-center">
				<nav role="navigation" aria-label="Paginação da tabela">
					<ul className="flex items-center gap-1">
						{/* Botão Anterior */}
						<li>
							<Button
								size="sm"
								variant="outline"
								className="cursor-pointer"
								onClick={() => table.previousPage()}
								disabled={!table.getCanPreviousPage()}
							>
								<ChevronLeft className="h-4 w-4" />
							</Button>
						</li>

						{/* Primeiro link de página + ellipsis */}
						{pages.length > 0 && pages[0] > 0 && (
							<>
								<li>{renderPaginationItem(0, 1, pageIndex === 0)}</li>
								{pages[0] > 1 && (
									<li>
										<span className="flex h-9 w-1 items-center justify-center">...</span>
									</li>
								)}
							</>
						)}

						{/* Números das páginas */}
						{pages.map((page) => (
							<li key={page}>
								{renderPaginationItem(page, page + 1, page === pageIndex)}
							</li>
						))}

						{/* Último link de página + ellipsis */}
						{pages.length > 0 && pages[pages.length - 1] < pageCount - 1 && (
							<>
								{pages[pages.length - 1] < pageCount - 2 && (
									<li>
										<span className="flex h-9 w-1 items-center justify-center">...</span>
									</li>
								)}
								<li>{renderPaginationItem(pageCount - 1, pageCount, pageIndex === pageCount - 1)}</li>
							</>
						)}

						{/* Botão Próximo */}
						<li>
							<Button
								size="sm"
								className="cursor-pointer"
								variant="outline"
								onClick={() => table.nextPage()}
								disabled={!table.getCanNextPage()}
							>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}