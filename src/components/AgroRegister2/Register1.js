import React from 'react'
import img1 from '../../assets/img/logoAgro.png'
import style from './Register1.module.css'
import { FaFacebookF } from "react-icons/fa";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import {SiOdnoklassniki} from 'react-icons/si'

function Register1() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.logo} style={{backgroundImage: `url(${img1})`}}></div>
                <div className={style.buttons}>
                    <div className={style.enter}>Enter</div>
                    <div className={style.register}>Register</div>
                </div>
                <p>или продалжить через</p>
                <div className={style.icons}>
                    <div><FaFacebookF /></div>
                    <div><AiFillApple /></div>
                    <div><AiOutlineGoogle /></div>
                    <div><SiOdnoklassniki /></div>
                    <div><img alt='img' src="https://img.icons8.com/fluent/48/000000/vk-com.png"/></div>
                </div>
            </div>
        </div>
    )
}

export default Register1
