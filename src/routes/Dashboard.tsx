import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const authentication = useSelector((state: any) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!authentication) {
			navigate("/login");
		}
	}, []);
	return <div>Dashboard</div>;
}

export default Dashboard;
