import { NextResponse } from 'next/server';

export async function GET() {
	const token = process.env.TOKEN_ACESS_API_ATHUS;

	const res = await fetch('https://api.sistema.athus.com/api/aluno', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();
	return NextResponse.json(data);
}