import style from "./style.module.css";
import paid from "../../../assets/icons/paid.svg";
import shipping from "../../../assets/icons/shipping.svg";
import store from "../../../assets/icons/store.svg";

export default function Sellers() {
    return (
        <section className={style.container}>
            <div className={style.card}>
                <img src={paid} alt="Pagos" />
                <p>Efectivo / Transferencia</p>
            </div>
            <div className={style.card}>
                <img src={shipping} alt="Envios" />
                <p>Envíos a todo el país</p>
            </div>
            <div className={style.card}>
                <img src={store} alt="compra" />
                <p>Compra por encargo</p>
            </div>
        </section>
    )
}