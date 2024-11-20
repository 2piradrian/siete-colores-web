import todos from '../../../assets/images/categories/todos.webp';
import herramientas from '../../../assets/images/categories/herramientas.webp';
import sellos from '../../../assets/images/categories/sellos.webp';
import abecedarios from '../../../assets/images/categories/abecedarios.webp';
import cortantes from '../../../assets/images/categories/cortantes.webp';
import texturizadores from '../../../assets/images/categories/texturizadores.webp';
import toppers from '../../../assets/images/categories/toppers.webp';
import moldes from '../../../assets/images/categories/moldes.webp';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import style from "./style.module.css";
import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <section className={style.container}>
             <div className={style.subtitle}>
                <Subtitle subtitle="Categorías" />
            </div>
            <div className={style.categories}>
                <Link to="/products/" aria-label='todos'>
                    <img src={todos} alt="Todos" />
                </Link>
                <Link to="/products/abecedarios" aria-label='abecedarios'>
                    <img src={abecedarios} alt="Abecedarios" />
                </Link>
                <Link to="/products/cortantes" aria-label='cortantes'>
                    <img src={cortantes} alt="Cortantes" />
                </Link>
                <Link to="/products/sellos" aria-label='sellos'>
                    <img src={sellos} alt="Sellos" />
                </Link>
                <Link to="/products/texturizadores" aria-label='texturizadores'>
                    <img src={texturizadores} alt="Texturizadores" />
                </Link>
                <Link to="/products/toppers" aria-label='toppers'>
                    <img src={toppers} alt="Toppers" />
                </Link>
                <Link to="/products/herramientas" aria-label='herramientas'>
                    <img src={herramientas} alt="Herramientas" />
                </Link>
                <Link to="/products/moldes" aria-label='moldes'>
                    <img src={moldes} alt="Moldes" />
                </Link>
            </div>
        </section>
    )
};