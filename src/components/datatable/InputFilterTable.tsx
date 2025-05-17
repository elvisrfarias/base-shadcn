import { Table } from '@tanstack/react-table';
import { Input } from '../ui/input';
import { ViewColumnButton } from './ViewColumnButton';

interface InputFilterTableProps {
	table: Table<any>;
	globalFilter: any;
	setGlobalFilter: (value: string) => void;
	hasButtonView?: boolean;
}

export const InputFilterTable = ({ table, globalFilter, setGlobalFilter, hasButtonView = false, }: InputFilterTableProps) => {
	return (
		<div className="flex items-center justify-between py-4">
			<Input
				placeholder="Filtrar..."
				value={globalFilter}
				onChange={(event) => setGlobalFilter(event.target.value)}
				className="max-w-sm"
			/>

			{hasButtonView && table &&
				<ViewColumnButton table={table} />
			}
		</div>
	)
}
