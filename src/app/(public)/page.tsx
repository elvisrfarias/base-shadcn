
import FormSingIn from "@/components/FormSingIn";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Login | Athus",
  description: "Tela de login da Athus",
};

const SignIn = async () => {
  const session = await auth();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <FormSingIn />
  );
}

export default SignIn;
