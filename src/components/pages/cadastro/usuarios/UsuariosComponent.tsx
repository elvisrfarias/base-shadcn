

import { DataTable } from "@/components/datatable/DataTable";


export const UsuariosComponent = async ({ columns }: { columns: any }) => {
	//const [dados, setDados] = useState<any[]>([]);
	//const [isLoading, setIsLoading] = useState(true);
	const res = await fetch("/api/usuarios");
	const data = await res.json();
	// const getAlunos = async () => {
	// 	try {


	// 		setDados(data);
	// 		setIsLoading(false);
	// 	} catch (error: any) {
	// 		throw new Error("Erro ao buscar alunos", error);
	// 	}
	// };


	return (
		<div className="w-full ">
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-gray-800">Usuários</h1>
				<p className="text-gray-400 text-sm ">Lista de usuários cadastrados</p>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTable
					columns={columns}
					data={data}
					searchFields={["name", "email", "desc"]}
				/>
			</div>
		</div>
	)
}