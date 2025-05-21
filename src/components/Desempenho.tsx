'use client'

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';

const Desempenho = () => {

	// Mock data para o gráfico de desempenho de alunos
	const dadosDesempenhoAlunos = [
		{ mes: 'Jan', avaliacao: 7.8, presenca: 85, retencao: 92 },
		{ mes: 'Fev', avaliacao: 7.9, presenca: 83, retencao: 94 },
		{ mes: 'Mar', avaliacao: 8.1, presenca: 87, retencao: 95 },
		{ mes: 'Abr', avaliacao: 8.3, presenca: 89, retencao: 93 },
		{ mes: 'Mai', avaliacao: 8.0, presenca: 86, retencao: 91 },
		{ mes: 'Jun', avaliacao: 8.4, presenca: 90, retencao: 96 },
		{ mes: 'Jul', avaliacao: 8.5, presenca: 91, retencao: 97 },
		{ mes: 'Ago', avaliacao: 8.6, presenca: 92, retencao: 95 },
		{ mes: 'Set', avaliacao: 8.4, presenca: 89, retencao: 94 },
		{ mes: 'Out', avaliacao: 8.3, presenca: 87, retencao: 93 },
		{ mes: 'Nov', avaliacao: 8.2, presenca: 86, retencao: 92 },
		{ mes: 'Dez', avaliacao: 8.0, presenca: 84, retencao: 90 },
	];

	// Mock data para o desempenho dos professores
	const dadosProfessores = [
		{ professor: 'Maria Silva', avaliacao: 9.4, alunos: 45, aprovacao: 94 },
		{ professor: 'João Santos', avaliacao: 9.2, alunos: 38, aprovacao: 92 },
		{ professor: 'Ana Oliveira', avaliacao: 9.5, alunos: 42, aprovacao: 96 },
		{ professor: 'Carlos Souza', avaliacao: 8.9, alunos: 36, aprovacao: 90 },
		{ professor: 'Luiza Pereira', avaliacao: 9.3, alunos: 40, aprovacao: 93 },
		{ professor: 'Pedro Costa', avaliacao: 9.1, alunos: 37, aprovacao: 91 },
	];

	// Mock data para o desempenho dos cursos
	const dadosCursos = [
		{ curso: 'Inglês Avançado', alunos: 120, aprovacao: 92, satisfacao: 9.4 },
		{ curso: 'Espanhol Básico', alunos: 85, aprovacao: 88, satisfacao: 9.1 },
		{ curso: 'Francês Intermediário', alunos: 65, aprovacao: 90, satisfacao: 9.2 },
		{ curso: 'Alemão Básico', alunos: 45, aprovacao: 86, satisfacao: 8.9 },
		{ curso: 'Italiano Básico', alunos: 40, aprovacao: 89, satisfacao: 9.0 },
		{ curso: 'Mandarim Iniciante', alunos: 35, aprovacao: 84, satisfacao: 8.7 },
	];

	// Mock data para o desempenho por unidade
	const dadosUnidades = [
		{ unidade: 'São Paulo - Centro', alunos: 320, retencao: 94, crescimento: '+12%' },
		{ unidade: 'São Paulo - Zona Sul', alunos: 280, retencao: 92, crescimento: '+8%' },
		{ unidade: 'Rio de Janeiro', alunos: 220, retencao: 90, crescimento: '+5%' },
		{ unidade: 'Belo Horizonte', alunos: 180, retencao: 93, crescimento: '+10%' },
		{ unidade: 'Curitiba', alunos: 150, retencao: 91, crescimento: '+7%' },
	];

	return (
		<div className="space-y-8 ">
			<Tabs defaultValue="desempenho">
				<TabsList className="grid grid-cols-4 mb-2">
					<TabsTrigger value="desempenho">Desempenho</TabsTrigger>
					<TabsTrigger value="turmas">Turmas</TabsTrigger>
					<TabsTrigger value="cursos">Cursos</TabsTrigger>
					<TabsTrigger value="professores">Professores</TabsTrigger>
				</TabsList>

				<TabsContent value="desempenho">
					<Card className="">
						<CardHeader>
							<CardTitle>Desempenho dos Alunos (2025)</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-120">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart
										data={dadosDesempenhoAlunos}
										margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="mes" />
										<YAxis yAxisId="left" domain={[0, 10]} />
										<YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
										<Tooltip />
										<Legend />
										<Line
											yAxisId="left"
											type="monotone"
											dataKey="avaliacao"
											name="Nota Média"
											stroke="#8B5CF6"
											activeDot={{ r: 8 }}
										/>
										<Line
											yAxisId="right"
											type="monotone"
											dataKey="presenca"
											name="Taxa de Presença (%)"
											stroke="#0EA5E9"
										/>
										<Line
											yAxisId="right"
											type="monotone"
											dataKey="retencao"
											name="Taxa de Retenção (%)"
											stroke="#10B981"
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="turmas">
					<Card>
						<CardHeader>
							<CardTitle>Análise por Turmas</CardTitle>
						</CardHeader>
						<CardContent>
							<Table className="h-120">
								<TableHeader>
									<TableRow>
										<TableHead>Unidade</TableHead>
										<TableHead>Total de Alunos</TableHead>
										<TableHead>Taxa de Retenção</TableHead>
										<TableHead>Crescimento</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{dadosUnidades.map((item, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{item.unidade}</TableCell>
											<TableCell>{item.alunos}</TableCell>
											<TableCell>{item.retencao}%</TableCell>
											<TableCell className="text-green-600">{item.crescimento}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="cursos"  >
					<Card>
						<CardHeader>
							<CardTitle>Análise dos Cursos</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-120 mb-6">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart
										data={dadosCursos}
										margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="curso" />
										<YAxis yAxisId="left" domain={[0, 150]} />
										<YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
										<Tooltip />
										<Legend />
										<Bar yAxisId="left" dataKey="alunos" name="Número de Alunos" fill="#8B5CF6" />
										<Bar yAxisId="right" dataKey="aprovacao" name="Taxa de Aprovação (%)" fill="#0EA5E9" />
									</BarChart>
								</ResponsiveContainer>
							</div>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Curso</TableHead>
										<TableHead>Alunos</TableHead>
										<TableHead>Aprovação</TableHead>
										<TableHead>Satisfação</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{dadosCursos.map((item, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{item.curso}</TableCell>
											<TableCell>{item.alunos}</TableCell>
											<TableCell>{item.aprovacao}%</TableCell>
											<TableCell>{item.satisfacao}/10</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="professores">
					<Card>
						<CardHeader>
							<CardTitle>Análise Professores</CardTitle>
						</CardHeader>
						<CardContent>
							<Table className="h-120">
								<TableHeader>
									<TableRow>
										<TableHead>Professor</TableHead>
										<TableHead>Avaliação Média</TableHead>
										<TableHead>Alunos Ativos</TableHead>
										<TableHead>Taxa de Aprovação</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{dadosProfessores.map((item, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{item.professor}</TableCell>
											<TableCell>{item.avaliacao}/10</TableCell>
											<TableCell>{item.alunos}</TableCell>
											<TableCell>{item.aprovacao}%</TableCell>
											<TableCell>
												<Badge variant={item.avaliacao >= 9.0 ? "default" : "secondary"}>
													{item.avaliacao >= 9.0 ? "Excelente" : "Bom"}
												</Badge>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

			</Tabs>
		</div>
	);
};

export default Desempenho;
