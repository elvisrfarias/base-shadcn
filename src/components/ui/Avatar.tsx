
export const Avatar = () => {
	return (
		<div className="flex justify-center items-center gap-4 rounded-full bg-[var(--foreground)] p-2 border-1 border-gray-200 cursor-pointer hover:bg-gray-100 transition-all duration-300">

			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				className="bg-none border-none w-6 h-6 m-2"
				color='gray'
			>
				<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z">
				</path>
			</svg>

		</div>
	)
}
