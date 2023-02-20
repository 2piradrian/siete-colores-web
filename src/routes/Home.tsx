import Caution from "../sections/caution/Caution";
import Hero from "../sections/hero/Hero";
import Popular from "../sections/popular/Popular";
import Layout from "./../layout/Layout";

function Home() {
	return (
		<Layout>
			<Hero />
			<Popular />
			<Caution />
		</Layout>
	);
}

export default Home;
