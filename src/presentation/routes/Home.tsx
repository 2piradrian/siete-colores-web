import Categories from "../components/organisms/Categories/Categories";
import Hero from "../components/organisms/Hero/Hero";
import News from "../components/organisms/News/News";
import Sellers from "../components/organisms/Sellers/Sellers";
import WithDiscount from "../components/organisms/WithDiscount/WithDiscount";
import Layout from "../layout/Layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Categories />
			<News />
			<WithDiscount />
			<Sellers />
		</Layout>
	);
}