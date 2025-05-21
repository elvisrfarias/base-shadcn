interface LogoProps {
	sizeNumber?: number;
	hasCompanyName?: boolean;
}

export const Logo = ({ sizeNumber = 12, hasCompanyName = false }: LogoProps) => {
	return (
		<div className="flex items-center gap-4">
			
			{hasCompanyName &&
				<p className=" flex text-lg font-bold text-gray-700">Athus - Concórdia</p>
			}
		</div>
	)
}
