import React from 'react'
import style from './Home.module.css'
import { TiCamera } from "react-icons/ti";
import img from '../../assets/img/logoAgro.png'

function Home() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={img} alt='logo'/>
                </div>
                <h3>ДОБАВИТЬ ТОВАР (ФОТО)</h3>
                <div className={style.blocks}>
                    <div className={style.blockLeft}>
                        <div className={style.addImg}>
                            <TiCamera />
                            <p>Добавить фото</p>
                        </div>
                        <div className={style.addImg}>
                            <TiCamera />
                            <p>Добавить фото</p>
                        </div>
                    </div>
                    <div className={style.blockRight}>
                        <div className={style.addImg}>
                            <TiCamera />
                            <p>Добавить фото</p>
                        </div>
                        <div className={style.addImg}>
                            <TiCamera />
                            <p>Добавить фото</p>
                        </div>
                    </div>
                </div>
                <button className={style.btn}>
                    ДАЛЕЕ
                </button>
            </div>
        </div>
    )
}

export default Home