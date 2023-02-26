import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!getAuth().currentUser) {
			navigate("/login");
		}
	}, []);
	return <div>Dashboard</div>;
}

export default Dashboard;
