'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const AvatarCustom = () => {
	return (
		<Avatar>
			<AvatarImage src="./assets/img-athus.png" />
			<AvatarFallback>Athus - Concórdia</AvatarFallback>
		</Avatar>
	)
}

export default AvatarCustom;
