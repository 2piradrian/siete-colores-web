import Caution from "../sections/caution/Caution";
import Contact from "../sections/contact/Contact";
import Footer from "../sections/footer/Footer";
import Hero from "../sections/hero/Hero";
import Popular from "../sections/popular/Popular";
import Layout from "./../layout/Layout";

function Home() {
	return (
		<Layout>
			<Hero />
			<Popular />
			<Caution />
			<Contact />
			<Footer />
		</Layout>
	);
}

export default Home;
