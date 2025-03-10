import React from "react";
import * as style from "./style.module.css";

type Props = {
	isActive: boolean;
	children: React.ReactNode;
	onClick?: () => void;
	type: "button" | "submit";
	styles?: string;
};

export default function MainButton({ isActive, children, styles, type, onClick, }: Props) {
	const { activeButton, inactiveButton } = style;

	return (
		<button 
			className={`${isActive ? activeButton : inactiveButton} ${styles}`} 
			onClick={isActive ? onClick : undefined}
			type={type}
			>
				{children}
		</button>
	);
}
