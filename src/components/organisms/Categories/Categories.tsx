import sellos from '../../../assets/images/categories/sellos.jpg';
import abecedarios from '../../../assets/images/categories/abecedarios.jpg';
import cortantes from '../../../assets/images/categories/cortantes.jpg';
import texturizadores from '../../../assets/images/categories/texturizadores.jpg';
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
            </div>
        </section>
    )
};