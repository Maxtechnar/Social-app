import React from "react";
import i from "./Info.module.css"

const Info = () => {
    return (
        <div className={i.page}>
            <h3>Максим Чернявский</h3>
            <div className={i.line}></div>
            <div className={i.info}>
                <div className={i.label}>
                    <div>День рождения:</div>
                    <a href="№">13.01.1997</a>
                </div>
                <div className={i.label}>
                    <div>Город:</div>
                    <a href="№">Мядель</a>
                </div>
                <div className={i.label}>
                    <div>Семейное положение:</div>
                    <a href="№">В активном поиске</a>
                </div>
                <div className={i.label}>
                    <div>Место учёбы:</div>
                    <a href="№">БНТУ (Политех)</a>
                </div>
            </div>
            <div className={i.line}></div>
            <div className={i.button}>
                <a href="№">
                    <button type="submit">Показать подробную информацию </button>
                </a>
            </div>

        </div>
    )
}

export default Info;