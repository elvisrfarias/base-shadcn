'use client'

import { useEffect, useState } from "react";

const Alunos = () => {
	const [alunos, setAlunos] = useState([]);

	useEffect(() => {
		const getDadosAlunos = async () => {
			try {
				const response = await fetch('/api/students');
				console.log(response)
				const data = await response.json();
				setAlunos(data);
				console.log(data)
			} catch (error) {
				console.error("Erro ao buscar alunos", error);
			}
		};

		getDadosAlunos();
	}, []);

	return (
		<div>
			<h1>Lista de Alunos</h1>
			
		</div>
	)
}

export default Alunos
