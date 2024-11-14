import style from "./style.module.css";

type Props = {
    code: string;
}

export default function ProductDescription({ code }: Props){
    return (
        <div className={style.container}>
            <div className={style.description}>
                {code[0] === "A" && (
                    <>
                        <p className={style.text}>
                            Con nuestros cortantes lograrás resultados profesionales de manera fácil, incluso sin ser un experto.
                        </p>
                        <p className={style.text}>
                            Fabricados en impresión 3D utilizando materiales no tóxicos biodegradables.
                        </p>
                        <h3 className={style.subtitle}>Cuidados</h3>
                        <p className={style.text}>
                            Lavar con agua fría o tibia.
                        </p>
                        <p className={style.text}>
                            No lavar en lavavajillas.
                        </p>
                    </>
                )}
                {code[0] === "B" && (
                    <>
                        <p className={style.text}>
                            Obtené las texturas más lindas con nuestros rodillos texturizadores. Hechos en madera
                            tallada que te permiten darle un toque especial a todas tus creaciones.
                        </p>
                        <p className={style.text}>
                            Pueden usarse en todo tipo de masas, como por ejemplo masa para galletas, porcelana, arcilla, entre otros.
                        </p>
                        <h3 className={style.subtitle}>Cuidados</h3>
                        <p className={style.text}>
                            Lavar con agua y un cepillo suavemente ya que contiene partes pequeñas y frágiles
                            que podrían romperse.
                        </p>
                    </>
                )}
                
            </div>
            <span className={style.disclaimer}>Tené en cuenta que fabricamos bajo pedido, no tenemos stock para entrega inmediata.</span>
        </div>
    )
}