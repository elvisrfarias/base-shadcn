interface LogoProps {
	sizeNumber?: number;
	hasCompanyName?: boolean;
}

export const Logo = ({ sizeNumber = 12, hasCompanyName = false }: LogoProps) => {
	const customClass: string = `inline-block size-${sizeNumber} rounded-full ring-2 ring-white max-w-12`;
	return (
		<div className="flex items-center gap-4">
			<img
				alt="Logo Athus Concórdia"
				src="/img-athus.png"
				className={customClass}
			/>
			{hasCompanyName &&
				<p className=" flex text-lg font-bold">Athus - Concórdia</p>
			}
		</div>
	)
}
