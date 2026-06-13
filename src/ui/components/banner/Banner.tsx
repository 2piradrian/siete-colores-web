import React from 'react';
import { PriceCalculator } from '../../../core/utils/PriceCalculator';
import * as style from './style.module.css';

export default function Banner() {
    return (
        <div className={style.banner}>
            {PriceCalculator.TRANSFER_DISCOUNT_PERCENTAGE}% de descuento abonando con transferencia
        </div>
    );
}
