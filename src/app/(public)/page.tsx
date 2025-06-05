
import FormSingIn from "@/components/FormSingIn";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Login | Athus",
  description: "Tela de login da Athus",
};

const SignIn = async () => {
  const session = await getServerSession(nextAuthOptions);

  // Se já estiver logado, redireciona para o dashboard
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <FormSingIn />
  );
}

export default SignIn;
