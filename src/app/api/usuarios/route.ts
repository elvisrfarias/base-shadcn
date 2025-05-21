import { UserType } from "@/app/(private)/cadastro/usuarios/columns"
import { NextResponse } from "next/server"

const getData: UserType[] = [
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


export const GET = () => {
	console.log(getData)
	return NextResponse.json(getData)
}