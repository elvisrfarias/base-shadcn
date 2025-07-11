import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PageNotFoundRoot = () => {

	return (
		<main className="flex h-screen justify-center align-center gap-32 bg-background rounded-sm">
			<Image
				src="/assets/img-404.svg"
				alt="Imagem que indica página não encontrada (404)"
				width={400}
				height={400}
				className="mx-auto m-0 sm:mb-0 sm:mx-0"
			/>
			<section className="flex flex-col text-left justify-center align-center">
				<span className="text-7xl font-semibold text-primary">404</span>
				<h1 className="mt-4 text-2sm font-semibold text-gray-900 sm:text-6xl">Página não encontrada</h1>
				<p className="mt-6 text-pretty text-gray-500">Desculpe, não conseguimos encontrar a página que você está procurando</p>

				<Button className="w-62 mt-24 text-sm font-semibold text-white">
					<Link href="/">Voltar para a página inicial</Link>
				</Button>
			</section>
		</main>
	)
}

export default PageNotFoundRoot;