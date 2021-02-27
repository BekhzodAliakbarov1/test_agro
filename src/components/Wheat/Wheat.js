import React from 'react'
import wheat from '../../assets/img/wheat.jpg'
import style from './Wheat.module.css'

const Wheat = () => {
    return (
        <div className={style.main}>
            <img src={wheat} alt="#" />
            <div className={style.title}>
                <h3>Овес чистый, не сорный. Последный урожай</h3>
                <h2>0.12 Р за 100гр.</h2>
                <p>Москва, Московская область г.Балахшина</p>
                <a href="https://www.google.ru/maps/place/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@55.7102129,37.5649999,13.69z/data=!4m5!3m4!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999">Показать на карте</a>
                <div className={style.category}>
                    <p>Производитель</p>
                    <h3>Маркин А.А.</h3>
                </div>
                <div className={style.category}>
                    <p>Категория</p>
                    <h3>Овес</h3>
                </div>
                <div className={style.buttonGroups}>
                    <button type="button">Позвонить</button>
                    <button type="button">Написать</button>
                </div>
            </div>
        </div>
    )
}

export default Wheat