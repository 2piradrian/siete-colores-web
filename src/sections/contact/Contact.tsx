import Button from "./../../components/button/Button";
import Titles from "./../../components/titles/Titles";
import style from "./style.module.css";

function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const contactData = Object.fromEntries(new FormData(e.currentTarget));
		if (!contactData.subject || !contactData.name || !contactData.text) {
			return alert("Debes llenar todos los campos");
		}
		window.location.href = `mailto:rodriguezcadr@gmail.com?subject=${contactData.subject}&body=${contactData.text}`;
	};

	return (
		<div className={`smallcontainer ${style.background}`} id="contact">
			<Titles title="Contactanos" subtitle="Dejanos un email" />
			<form className={style.subcontainer} onSubmit={handleSubmit}>
				<input type="text" placeholder="Nombre" name="name" />
				<input type="text" placeholder="Asunto" name="subject" />
				<textarea placeholder="Su mensaje aquí..." name="text" />
				<button>
					<Button isActive>Contactar</Button>
				</button>
			</form>
		</div>
	);
}

export default Contact;
