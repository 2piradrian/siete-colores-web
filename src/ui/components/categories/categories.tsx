import { Link } from '@gatsbyjs/reach-router';
import React from 'react';
import Subtitle from '../subtitle/subtitle';
import * as style from "./style.module.css";

export default function Categories() {
    return (
        <section className={style.container}>
            <div className={style.subtitle}>
                <Subtitle subtitle="Categorías" />
            </div>
            <div className={style.categories}>
                <Link to="/productos/" aria-label='todos'>
                    <img src="/assets/images/categories/todos.webp" alt="Todos" />
                </Link>
                <Link to="/productos/abecedarios" aria-label='abecedarios'>
                    <img src="/assets/images/categories/abecedarios.webp" alt="Abecedarios" />
                </Link>
                <Link to="/productos/cortantes" aria-label='cortantes'>
                    <img src="/assets/images/categories/cortantes.webp" alt="Cortantes" />
                </Link>
                <Link to="/productos/sellos" aria-label='sellos'>
                    <img src="/assets/images/categories/sellos.webp" alt="Sellos" />
                </Link>
                <Link to="/productos/texturizadores" aria-label='texturizadores'>
                    <img src="/assets/images/categories/texturizadores.webp" alt="Texturizadores" />
                </Link>
                <Link to="/productos/toppers" aria-label='toppers'>
                    <img src="/assets/images/categories/toppers.webp" alt="Toppers" />
                </Link>
                <Link to="/productos/herramientas" aria-label='herramientas'>
                    <img src="/assets/images/categories/herramientas.webp" alt="Herramientas" />
                </Link>
                <Link to="/productos/moldes" aria-label='moldes'>
                    <img src="/assets/images/categories/moldes.webp" alt="Moldes" />
                </Link>
                <Link to="/productos/totebags" aria-label='totebags'>
                    <img src="/assets/images/categories/totebags.webp" alt="Totebags" />
                </Link>
            </div>
        </section>
    )
};