import { UsuariosComponent } from "@/components/pages/cadastro/usuarios/UsuariosComponent";
import { columns } from "./columns";

export const metadata = {
	title: "Usuários | Athus",
	description: "Tela de usuários da Athus",
}

const User = async () => {

	return (
		<UsuariosComponent columns={columns} />
	)
}

export default User;
