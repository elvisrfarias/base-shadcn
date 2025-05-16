'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Avatar = () => {
	const [hasImage, setHasImage] = useState(false);
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Fecha o menu ao clicar fora
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				onClick={() => setOpen(!open)}
				className="flex justify-center items-center w-12 h-12 bg-[var(--foreground)] text-gray-400 mr-2 border border-gray-200 cursor-pointer hover:bg-[var(--color-primary)] hover:text-gray-100 rounded-full transition-all duration-300"
			>
				{!hasImage ? (
					<svg
						fill="currentColor"
						viewBox="0 0 24 24"
						className="w-6 h-6"
					>
						<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				) : (
					<Image
						alt="Avatar"
						src={'/img-athus.png'}
						className="rounded-full w-12 h-12"
						width={500}
						height={500}
					/>
				)}
			</div>

			{open && (
				<div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
					<ul className="py-1 text-sm text-gray-700">
						<li>
							<Link href="/perfil" >
								<button className="w-full text-left px-4 py-2 hover:bg-gray-100">
									Perfil
								</button>
							</Link>
						</li>
						<li>
							<Link href="/settings" >
								<button className="w-full text-left px-4 py-2 hover:bg-gray-100">Configurações</button>
							</Link>
						</li>

						<li>
							<button className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100">Sair</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
