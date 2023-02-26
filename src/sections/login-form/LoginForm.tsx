import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Titles from "../../components/titles/Titles";
import useAuth from "../../hooks/useAuth";
import { set_auth } from "../../redux/actions/creators";
import style from "./style.module.css";

function LoginForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authentication = useSelector((state: any) => state.auth);
	const { logInWithEmailAndPassword } = useAuth();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const logData = Object.fromEntries(new FormData(e.currentTarget));
		if (!logData.email || !logData.password) {
			return alert("Debes llenar todos los campos");
		}
		logInWithEmailAndPassword(logData.email.toString(), logData.password.toString());
	};

	useEffect(() => {
		if (authentication) {
			navigate("/dashboard");
		} else {
			dispatch(set_auth(null));
		}
	}, [authentication]);

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
