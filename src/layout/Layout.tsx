import React from "react";
import Header from "../components/organisms/Header/Header";
import HeaderMessage from "../components/molecules/HeaderMessage/HeaderMessage";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<HeaderMessage />
			<main>{children}</main>
		</>
	);
}

export default Layout;
