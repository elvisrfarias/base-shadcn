import { DataTable } from "@/components/datatable/DataTable"
import { UserType, columns } from "./columns"


async function getData(): Promise<UserType[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			name: "Elvis Farias",
			image: "https://example.com/image.jpg",
			email: "m@example.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "Amanda Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "teste@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "Gustavo Zua",
			image: "https://example.com/image.jpg",
			email: "val@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "Carolina Silva",
			image: "https://example.com/image.jpg",
			email: "mel@teste.com",
			desc: "minha descrição",
		}, {
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "tuti@teste.com",
			desc: "minha descrição",
		},
		{
			id: "728ed52r",
			name: "John Doe",
			image: "https://example.com/image.jpg",
			email: "elvis@teste.com",
			desc: "minha descrição",
		},
	]
}

const User = async () => {
	const data = await getData()

	return (
		<div className="w-full ">
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-gray-800">Usuários</h1>
				<p className="text-gray-400 text-sm ">Lista de usuários cadastrados</p>
			</div>

			<div className="bg-white p-8 h-full rounded-xl shadow-md">
				<DataTable
					columns={columns}
					data={data}
					searchFields={["name", "email", "desc"]}
				/>
			</div>
		</div>
	)
}

export default User;
