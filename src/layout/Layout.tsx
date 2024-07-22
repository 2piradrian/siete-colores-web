import React from "react";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";
import style from "./style.module.css";
import { Toaster } from "react-hot-toast";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main className={style.layoutContainer}>{children}</main>
			<Footer />
			<Toaster />
		</>
	);
}

export default Layout;
