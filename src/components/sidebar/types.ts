import { JSX } from "react"

export interface IMenuItems {
	label: string,
	icon: JSX.Element,
	path?: string,
	submenu?: ISubmenu[]
}

interface ISubmenu {
	label: string,
	path: string
}
