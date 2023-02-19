import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Navbar from "./../../components/navbar/Navbar";

import style from "./style.module.css";

function Header() {
	const [closed, setClosed] = useState<boolean>(window.innerWidth < 900);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => setClosed(window.innerWidth < 900),
			false
		);
	}, [window]);

	return (
		<header className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<RxHamburgerMenu
					className={style.burger}
					onClick={() => setClosed(false)}
				/>
				<Link to="/cart">
					<AiOutlineShoppingCart className={style.cart} />
				</Link>
				{!closed && <Navbar setClosed={setClosed} />}
			</div>
		</header>
	);
}

export default Header;
