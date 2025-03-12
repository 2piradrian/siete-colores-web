import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import useViewModel from "../viewmodels/layout/useViewModel";
import { Toaster } from "react-hot-toast";
import * as style from './style.module.css';
import "../style/global.css"

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	const { categories, categorySelected } = useViewModel(); 

	return (
		<>
			<Header 
				categories={categories} 
				categorySelected={categorySelected} 
			/>
			<main className={style.layoutContainer}>
				{children}
			</main>
			<Footer />
		</>
	);
}

