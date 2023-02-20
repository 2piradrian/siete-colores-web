import { Link } from "react-router-dom";
import circles_illustration from "../../assets/misc/circles_illustration.svg";
import circles_illustrationdesk from "../../assets/misc/circles_illustrationdesk.svg";
import isoMobile from "../../assets/misc/isoMobile.svg";
import Button from "./../../components/button/Button";

import style from "./style.module.css";
const { subcontainer, content, presentation, decoration, button } = style;

function Hero() {
	return (
		<div className="bigcontainer">
			<div className={subcontainer}>
				<img src={isoMobile} alt="isologotipo de marca" />
				<div className={content}>
					<p className={presentation}>
						Diseñamos productos a medida, encontrá cortantes,
						selladores, texturizadores y toppers para facilitar tu
						trabajo.
					</p>
					<Link to="/products">
						<Button isActive styles={button}>
							Ver productos
						</Button>
					</Link>
				</div>
			</div>
			<img
				className={decoration}
				src={
					window.innerWidth > 900
						? circles_illustrationdesk
						: circles_illustration
				}
				alt="imagen de decoración"
			/>
		</div>
	);
}

export default Hero;
