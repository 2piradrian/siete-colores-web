import Categories from "../components/organisms/Categories/Categories";
import Hero from "../components/organisms/Hero/Hero";
import News from "../components/organisms/News/News";
import Sellers from "../components/organisms/Sellers/Sellers";
import Layout from "../layout/Layout";

function Home() {
	return (
		<Layout>
			<Hero />
			<Categories />
			<News />
			<Sellers />
		</Layout>
	);
}

export default Home;
