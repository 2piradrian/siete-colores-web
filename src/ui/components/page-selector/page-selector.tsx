import React from "react";
import MainButton from "../main-button/main-button";
import * as style from "./style.module.css";

type Props = {
    currentPage: number;
    totalPages?: number;
    prevPage: () => void;
    nextPage: () => void;
}

export default function PageSelector({ currentPage, totalPages, prevPage, nextPage }: Props) {
    return (
        <div className={style.container}>
            <MainButton 
                isActive={currentPage > 1}
                type="button" 
                styles={style.button}
                onClick={prevPage}
                >
                    {"<"}
            </MainButton>
            <span className={style.pageNumber}>{currentPage}</span>
            <MainButton 
                isActive={currentPage < (totalPages ?? 1)}	
                type="button" 
                styles={style.button}
                onClick={nextPage}
                >
                    {">"}
            </MainButton>
        </div>
    );
};