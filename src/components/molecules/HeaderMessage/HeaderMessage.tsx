"use client"

import style from "./style.module.css";
import price from "../../../data/price.json"

export default function HeaderMessage() {
  return (
    <div className={style.container}>
        Compra mínima de AR$ {price["min-amount"]}
    </div>
  );
}