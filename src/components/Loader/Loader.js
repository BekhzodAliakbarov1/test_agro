import React from 'react'
import style from './Loader.module.css'
import img from '../../assets/img/logoAgro.png'


function Loader() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div style={{backgroundImage:`url(${img})`}} className={style.logo}></div>
                <div className={style.loader}></div>
            </div>
        </div>
    )
}

export default Loader
