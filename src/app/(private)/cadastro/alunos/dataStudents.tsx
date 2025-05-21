import { StudentsType } from "./columnsStudents";

export const getAlunos = async (): Promise<StudentsType[]> => {
	const pageSize = 100;
	let allAlunos: StudentsType[] = [];
	let page = 0;
	let hasMore = true;

	while (hasMore) {
		try {
			const res = await fetch(`https://api.sistema.athus.com/api/aluno?page=${page}&size=${pageSize}`, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdGh1cy1hcGkiLCJzdWIiOiJhZG1pbmNvbmNvcmRpYSIsInVzZXJJZCI6MzI4LCJlbXByZXNhSWQiOjQwMDA2NCwiaWF0IjoxNzQ3MzQyMDc4LCJleHAiOjE3Nzg4NzgwNzh9.No6pAk5i9OidYU5etvG3NHdbfj-J_kdQbLO4TUqUJXQ`,
					'Accept': '*/*',
				},
			});

			if (!res.ok) {
				throw new Error(`Erro ao buscar página ${page}: ${res.statusText}`);
			}

			const json = await res.json();
			const alunos: StudentsType[] = json.content;

			allAlunos = [...allAlunos, ...alunos];

			// Se o número de alunos retornados for menor que o tamanho da página, acabou
			hasMore = alunos.length === pageSize;
			page++;

		} catch (error) {
			console.error('Erro ao buscar alunos:', error);
			break;
		}
	}

	return allAlunos;
}
