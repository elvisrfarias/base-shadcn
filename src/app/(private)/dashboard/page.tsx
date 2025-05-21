import Desempenho from "@/components/Desempenho";
import StatsCard from "@/components/StartCard";
import { BookCopy, Flame, LocateFixed, Sparkles, User } from "lucide-react";

const Dashboard = () => {
	return (
		<>
			<div className="w-full mt-6">
				<div className="flex justify-between mb-8">
					<h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Dashboard</h1>
				</div>

				<div className="flex justify-between  mb-8">
					<StatsCard
						title="Total de alunos"
						change="+12% este trimestre"
						value={317}
						icon={<User />}
						className="bg-white w-72 h-40 rounded-xl shadow p-4"
					/>
					<StatsCard
						title="Alunos ativos"
						change="+1% em relação ao último mês"
						value={122}
						icon={<LocateFixed />}
						className="bg-white w-72 h-40 rounded-xl shadow p-4"
					/>
					<StatsCard
						title="Média de Notas"
						change="+2% em relação ao último mês"
						value={'8.5 %'}
						icon={<Flame />}
						className="bg-white w-72 h-40 rounded-xl shadow p-4"
					/>
					<StatsCard
						title="Quantidade de turmas"
						change="Todas as turmas"
						value={16}
						icon={<Sparkles />}
						className="bg-white w-72 h-40 rounded-xl shadow p-4"
					/>
					<StatsCard
						title="Quantidade de cursos"
						change="Todos os cursos"
						value={8}
						icon={<BookCopy />}
						className="bg-white w-72 h-40 rounded-xl shadow p-4"
					/>
				</div>
				<Desempenho />
			</div>
		</>
	)
}

export default Dashboard;
