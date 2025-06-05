'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const FormSingIn = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<{ status: number, message: string } | null>(null);

	const router = useRouter();

	const handleClick = async (e: SyntheticEvent) => {
		e.preventDefault();

		if (!username || !password) {
			console.error("Username and password are required");
			return;
		}

		const result = await signIn('credentials', {
			username,
			password,
			redirect: false,
		});

		if (result?.error) {
			setErrorMessage({
				status: result.status,
				message: "Usuário ou senha incorreta"
			});
			return
		}

		router.replace('/dashboard');
	};

	return (
		<div className="grid grid-cols-12 h-screen w-screen bg-[var(--color-primary)]">
			<div className="flex items-center justify-center col-span-6 bg-[url(/assets/img-idiomas.jpg)] bg-cover bg-center  rounded-r-3xl hidden sm:block" />

			<div className="flex flex-col items-center justify-center bg-[var(--color-primary)] col-span-6 rounded-4xl">
				<div className="sm:w-full sm:max-w-sm">

					<div className="bg-white p-8 rounded-sm shadow-sm">
						<form className="space-y-6">
							<div>
								<label
									htmlFor="username"
									className="block text-sm font-medium text-gray-900"
								>
									Login
								</label>
								<input
									id="username"
									name="username"
									type="username"
									required
									autoComplete="username"
									className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm"
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-900"
								>
									Senha
								</label>
								<input
									id="password"
									name="password"
									type="password"
									required
									autoComplete="current-password"
									className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="w-full rounded-md bg-[var(--color-primary)] px-3 py-2 text-white font-semibold hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
								onClick={handleClick}
								disabled={!username || !password}
								title={!username || !password ? "Preencha os campos" : "Entrar"}
							>
								Entrar
							</button>
							{errorMessage && (
								<div className="text-red-500 text-sm">
									{errorMessage.message}
								</div>
							)}
						</form>
					</div>
				</div>

			</div>
		</div>
	);
}

export default FormSingIn
