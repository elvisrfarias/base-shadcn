import { DataTable } from "@/components/datatable/DataTable";
import { columnsStudents } from "./columnsStudents";
import { getAlunos } from "./dataStudents";


const Students = async () => {
	const data = await getAlunos()

	return (
		<div className="w-full ">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-800">Alunos</h1>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-sm">
				<DataTable
					columns={columnsStudents}
					data={data}
					searchFields={["nome", "responsavel", "email", "telefonecasa", "telefonecelular", "telefonecomercial"]}
					defaultColumnVisibility={{
						id: false,
						telefonecelular: false,
						dataRegistro: false,
						dataAlteracao: false,
						observacao: false,
						endereco: false,
						bairro: false,
						cidade: false,
						uf: false,
						numero: false,
						cep: false,
					}}
				/>
			</div>
		</div>
	)
}

export default Students;