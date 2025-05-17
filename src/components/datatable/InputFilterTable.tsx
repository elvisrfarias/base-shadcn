import { Table } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Input } from '../ui/input';

interface InputFilterTableProps {
	table: Table<any>;
	globalFilter: any;
	setGlobalFilter: (value: string) => void;
	hasButtonView?: boolean;
}

export const InputFilterTable = ({ table, globalFilter, setGlobalFilter, hasButtonView = true, }: InputFilterTableProps) => {
	return (
		<div className="flex items-center py-4">
			<Input
				placeholder="Filtrar pelo nome..."
				value={globalFilter}
				onChange={(event) => setGlobalFilter(event.target.value)}
				className="max-w-sm"
			/>

			{hasButtonView && table &&
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className="ml-auto">Visualizar</Button>
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
			}
		</div>
	)
}
