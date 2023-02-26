import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Titles from "../../components/titles/Titles";
import useAuth from "../../hooks/useAuth";
import style from "./style.module.css";

function LoginForm() {
	const navigate = useNavigate();
	const { logInWithEmailAndPassword } = useAuth();

	useEffect(() => {
		checkUser();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const logData = Object.fromEntries(new FormData(e.currentTarget));
		if (!logData.email || !logData.password) {
			return alert("Debes llenar todos los campos");
		}
		await logInWithEmailAndPassword(logData.email.toString(), logData.password.toString());
		checkUser();
	};

	const checkUser = () => {
		if (getAuth().currentUser) {
			navigate("/dashboard");
		}
	};

	return (
		<section className={`bigcontainer ${style.background}`}>
			<Titles title="Ingresá" subtitle="al panel de administrador" />
			<form className={style.subcontainer} onSubmit={handleSubmit}>
				<label htmlFor="email">Correo electrónico</label>
				<input type="email" placeholder="example@email.com" name="email" />
				<label htmlFor="password">Contraseña</label>
				<input type="password" placeholder="************" name="password" />
				<button>
					<Button isActive>Ingresar</Button>
				</button>
			</form>
		</section>
	);
}

export default LoginForm;
