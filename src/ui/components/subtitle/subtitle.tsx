import React from "react";
import * as style from "./style.module.css";

type Props = {
    subtitle: string;
}

export default function Subtitle({subtitle}: Props){
    return <h2 className={style.subtitle}>{subtitle}</h2>
}