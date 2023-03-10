import Button from "./../../components/button/Button";
import Titles from "./../../components/titles/Titles";
import style from "./style.module.css";

function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const contactData = Object.fromEntries(new FormData(e.currentTarget));
		for (const value of Object.values(contactData)) {
			if (typeof value === "string" && value.trim() === "") {
				alert("Por favor, rellena todos los campos.");
				return;
			}
		}
		window.location.href = `mailto:rodriguezcadr@gmail.com?subject=${contactData.subject}&body=${contactData.text}`;
	};

	return (
		<section className={`smallcontainer ${style.background}`} id="contact">
			<Titles title="Contactanos" subtitle="Dejanos un email" />
			<form className={style.subcontainer} onSubmit={handleSubmit}>
				<input type="text" placeholder="Nombre" name="name" />
				<input type="text" placeholder="Asunto" name="subject" />
				<textarea placeholder="Su mensaje aquí..." name="text" />
				<button>
					<Button isActive>Contactar</Button>
				</button>
			</form>
		</section>
	);
}

export default Contact;
