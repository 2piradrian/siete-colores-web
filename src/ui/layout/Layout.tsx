import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { SEO } from "../components/seo/seo";
import "../style/global.css";
import useViewModel from "../viewmodels/layout/useViewModel";
import * as style from './style.module.css';

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	const { categories, categorySelected } = useViewModel();

	return (
		<>
			<SEO />
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

