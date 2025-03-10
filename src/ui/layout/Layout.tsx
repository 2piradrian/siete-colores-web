import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";
import { Toaster } from "react-hot-toast";

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
			<Toaster />
		</>
	);
}