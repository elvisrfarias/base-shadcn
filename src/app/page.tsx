
import FormSingIn from "@/components/FormSingIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Athus",
  description: "Tela de login da Athus",
};

const SignIn = () => {
  return (
    <FormSingIn />
  );
}

export default SignIn;
