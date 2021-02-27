import React from 'react'
import style from './Add.module.css'
import logoAgro from '../../assets/img/logoAgro.png'

const Add = () => {
    return (
        <div className={style.main}>
            <div className={style.imgBlock}>
            <img src={logoAgro} alt="logoAgro" />
            </div>
            <h2>Добавить Товарь (Описание)</h2>
            <div className={style.inputTop}>
            <input type="text" placeholder="Введите описание..." />
            </div>
            <div className={style.inputBody}>
                <div className={style.inputBottom}>
                    <h4>Количество</h4>
                    <input type="text" />
                </div>
                <div className={style.inputBottom}>
                    <h4>Сумма за 100гр.</h4>
                    <input type="text" />
                </div>
                <div className={style.inputBottom}>
                <h4>Сумма за 100гр.</h4>
                    <input type="text" />
                </div>
            <a href="https://www.google.ru/maps/place/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@55.7102129,37.5649999,13.69z/data=!4m5!3m4!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999">Где забрать</a>
            <button type="button">Разместить</button>
            </div>
        </div>
    )
}

export default Add