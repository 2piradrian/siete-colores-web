import style from "./style.module.css";

type Props = {
	isActive: boolean;
	children: React.ReactNode;
	styles?: string;
};

function Button({ isActive, children, styles }: Props) {
	const { activeButton, inactiveButton } = style;

	return (
		<div className={`${isActive ? activeButton : inactiveButton} ${styles}`}>{children}</div>
	);
}

export default Button;
