import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function HeaderMessage() {
  const [minAmount, setMinAmount] = useState(0);
  
  useEffect(() => {
    const fetchMinAmount = async () => {
      const response = await fetch("/data/price.json");
      const data = await response.json();

      setMinAmount(data["min-amount"]);
    };

    fetchMinAmount();
  }, [minAmount]);
  return (
    <div className={style.container}>
        Compra mínima de AR$ {minAmount}
    </div>
  );
}