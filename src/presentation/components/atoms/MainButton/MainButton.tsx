import style from "./style.module.css";

type Props = {
	isActive: boolean;
	children: React.ReactNode;
	onClick?: () => void;
	styles?: string;
};

export default function MainButton({ isActive, children, onClick = () => {}, styles }: Props) {
	const { activeButton, inactiveButton } = style;

	return (
		<button className={`${isActive ? activeButton : inactiveButton} ${styles}`} onClick={() => {onClick}}>
			{children}
		</button>
	);
}
