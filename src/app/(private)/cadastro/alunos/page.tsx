import { StudentsComponent } from "@/components/pages/cadastro/alunos/StudentsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Alunos | Athus",
	description: "Tela de alunos da Athus",
};

const Students = () => {
	return (
		<>
			<StudentsComponent />
		</>
	);
};

export default Students;
