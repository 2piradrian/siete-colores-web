import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import AddProducts from "../sections/add-products/AddProducts";

function Dashboard() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!getAuth().currentUser) {
			navigate("/login");
		}
	}, []);
	return (
		<Layout>
			<AddProducts />
		</Layout>
	);
}

export default Dashboard;
