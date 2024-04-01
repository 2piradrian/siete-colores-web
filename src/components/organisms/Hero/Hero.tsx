import style from "./style.module.css"
import portada from "../../../assets/images/portada.jpg"

export default function Hero() {
    return (
        <section className={style.container}>
            <div className={style.subcontainer}>
                <h1 className={style.title}>Siete Colores</h1>
                <img src={portada} alt="" className={style.image}/>
            </div>
        </section>
    )
}