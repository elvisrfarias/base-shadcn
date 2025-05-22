import FormSignIn from "@/components/FormSignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Athus",
  description: "Tela de login da Athus",
};

const SignIn = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen bg-[var(--color-primary)]">
      <div className="flex items-center justify-center col-span-6 bg-[url(/assets/img-idiomas.jpg)] bg-cover bg-center  rounded-r-3xl hidden sm:block" />

      <div className="flex flex-col items-center justify-center bg-[var(--color-primary)] col-span-6">
        {/* <div className="sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white mb-4">Entrar</h2>

          <div className="bg-white p-8 rounded-sm shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Login
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>

              <div>
                <Link href="/dashboard">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[var(--color-primary)] px-3 py-2 text-white font-semibold hover:opacity-90 transition"
                  >
                    Entrar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div> */}


        <FormSignIn />

      </div>
    </div>

  );
}

export default SignIn;
