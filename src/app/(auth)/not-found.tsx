import Link from "next/link";

export default function Custom404() {
	return (
		<div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 border border-gray-200 rounded-xl">
			<div className="text-center">
				<p className="text-xl font-semibold text-[var(--color-primary)]">404</p>

				<h1 className="mt-4 text-2sm font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
					Página não encontrada
				</h1>
				<p className="mt-6 text-pretty text-gray-500">
					Desculpe, não conseguimos encontrar a página que você está procurando.
				</p>


				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/dashboard"
						className="rounded-md bg-[var(--color-primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Voltar para a página inicial
					</Link>

				</div>
			</div>
		</div>
	)
}