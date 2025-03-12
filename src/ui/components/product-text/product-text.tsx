import React from "react";
import * as style from "./style.module.css";

type Props = {
    code: string;
    description: string;
}

export default function ProductText({ code, description }: Props){
    return (
        <div className={style.container}>
            <div className={style.description}>
                {code[0] === "A" && (
                    <>
                        <p>
                            Con nuestros cortantes lograrás resultados profesionales de manera fácil, incluso sin ser un experto.
                        </p>
                        <p>
                            Fabricados en impresión 3D utilizando materiales no tóxicos biodegradables.
                        </p>
                        <h3 className={style.subtitle}>Cuidados</h3>
                        <p>
                            Lavar con agua fría o tibia.
                        </p>
                        <p>
                            No lavar en lavavajillas.
                        </p>
                    </>
                )}
                {code[0] === "B" && (
                    <>
                        <p>
                            Obtené las texturas más lindas con nuestros rodillos texturizadores. Hechos en madera
                            tallada que te permiten darle un toque especial a todas tus creaciones.
                        </p>
                        <p>
                            Pueden usarse en todo tipo de masas, como por ejemplo masa para galletas, porcelana, arcilla, entre otros.
                        </p>
                        <h3 className={style.subtitle}>Cuidados</h3>
                        <p>
                            Lavar con agua y un cepillo suavemente ya que contiene partes pequeñas y frágiles
                            que podrían romperse.
                        </p>
                    </>
                )}
                {code[0] === "C" && (
                    <>
                        <p>
                            Transforma tus ideas en realidad con nuestros moldes termoformados.
                        </p>
                        <p>
                            Contamos con una amplia variedad de tamaños y formas, ideales para adaptarse a cualquier proyecto.
                        </p>
                        <p>
                            Los moldes termoformados ofrecen una producción rápida, precisa y de alta calidad.
                        </p>
                        <p>
                            Son compatibles con materiales como cemento, yeso, resina, arcilla, entre otros, para llevar tus creaciones a un nuevo nivel.
                        </p>
                    </>
                )}
                <p>{description}</p>
            </div>
            <span className={style.disclaimer}>Tené en cuenta que fabricamos bajo pedido, no tenemos stock para entrega inmediata.</span>
        </div>
    )
}