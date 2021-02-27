import React from 'react'
import style from './Menu.module.css';
import img from '../../assets/img/image.png'
import img1 from '../../assets/img/logoBuqa.png'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className={style.main}>
            <div className={style.logoContainer}>
                    <div className={style.logoCow} style={{backgroundImage:`url(${img1})`}}></div>
                    <div className={style.logo} style={{backgroundImage: `url(${img})`}}></div>
            </div>
            <div className={style.container}>
                <div>
                    <Link to='#'>
                        Мои товары
                    </Link>
                </div>
                <div>
                    <Link to='#'>
                        Начать поиск
                    </Link>
                </div>
                <div>
                    <Link to='#'>
                        Связь
                    </Link>
                </div>
                <div>
                    <Link to='#'>
                        Избранный
                    </Link>
                </div>
                <div>
                    <Link to='#'>
                        Настройки
                    </Link>
                </div>
                <div>
                    <Link to='#'>
                        Выход
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
