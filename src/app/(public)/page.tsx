import { Metadata } from "next";
import FormSingIn from "@/components/FormSingIn";

export const metadata: Metadata = {
  title: "Login",
  description: "Tela de login da Athus",
};

const SignIn = async () => {
  return <FormSingIn />;
};

export default SignIn;
