import { JSX } from "react";

export interface IMenuItems {
	label: string;
	icon: JSX.Element;
	path?: string;
	submenu?: ISubmenu[];
}

export interface ISubmenu {
	label: string;
	path: string;
	action?: string;
}

export interface ISideBarMenuProps {
	isCollapsed: boolean;
	setIsCollapsed: (value: boolean) => void;
}

export interface SidebarItemProps {
	item: IMenuItems;
	index: number;
	isCollapsed: boolean;
	isOpen: boolean;
	pathname: string;
	handleClick: (index: number, hasSubmenu: boolean) => void;
	handleLogout: () => void;
}