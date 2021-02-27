import React from 'react'
import style from './Home2.module.css'
import img from '../../assets/img/logoAgro.png'

function Home2() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={img} alt='logo'/>
                </div>
                <div className={style.btn}>
                    <button type='button'>
                        ЧАСТНОЕ ЛИЦО
                    </button>
                    <button type='button'>
                        ОРГАНИЗАЦИЯ
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default Home2