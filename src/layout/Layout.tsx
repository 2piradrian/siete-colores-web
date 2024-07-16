import React from "react";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<>
			<Header />
			{/* <HeaderMessage /> */}
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
