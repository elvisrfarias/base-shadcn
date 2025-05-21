import { StudentsType } from '@/app/(private)/cadastro/alunos/columnsStudents';
import { NextResponse } from 'next/server';

const token = process.env.TOKEN_ACESS_API_ATHUS;
if (!token) throw new Error('Token de acesso não encontrado');

export const GET = async () => {
	let allData: StudentsType[] = [];
	let page = 0;
	let hasMore = true;

	while (hasMore) {
		const res = await fetch(`https://api.sistema.athus.com/api/aluno?page=${page}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});

		const data: { content: StudentsType[] } = await res.json();

		// Verifica se os dados vieram e se ainda tem mais páginas
		if (data && data.content.length > 0) {
			allData = allData.concat(data.content);
			page++;
		} else {
			hasMore = false;
		}
	}

	return NextResponse.json(allData);
}
