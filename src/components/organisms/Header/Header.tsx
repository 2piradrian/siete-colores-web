import { useEffect, useState } from "react";
import Navbar from "../../molecules/Navbar/Navbar";
import menuicon from "../../../assets/icons/menu.svg";
import iso from "../../../assets/icons/isotipo.svg";
import style from "./style.module.css"

export default function Header() {
    const [closed, setClosed] = useState<boolean>(true);

	useEffect(() => {
		setClosed(window.innerWidth < 900);
		window.addEventListener("resize", () => setClosed(window.innerWidth < 900), false);
	}, []);

    return (
        <header className={style.header}>
            <div className={style.container}>
				<a href="/" >
                	<img src={iso} alt="isotipo" className={style.isotype}/>
				</a>
                <img
					src={menuicon}
					alt="burger icon"
					className={style.burger}
					onClick={() => setClosed(!closed)}
				/>
				<Navbar setClosed={setClosed} closed={closed} />
            </div>
        </header>
    );
}