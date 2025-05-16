import Alunos from "@/components/pages/Alunos";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Alunos | Athus",
	description: "Alunos da Athus",
};

const Students = () => {
	return (
		<Alunos />
	)
}

export default Students;