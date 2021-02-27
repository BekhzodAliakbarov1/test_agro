import React from 'react'
import Style from './AgroRegister.module.css'
import logo from '../../assets/img/logoAgro.png'

const AgroRegister = () => {
    return (
        <div className={Style.main} >
            <div className={Style.inMain} >    
                <div className={Style.logo} style={{backgroundImage:`url(${logo})`}} >
                    
                </div>
                <div className={Style.formIn} >
                    <h4>
                        РЕГИСТРАЦИЯ ФИЗИЧИСКОГО ЛИЦО
                    </h4>
                    <form>
                        <input type="text" placeholder='Логин'  />
                        <input type="password" placeholder='Пароль'  />
                        <input type="email" placeholder='E-Mail'  />
                        <input type="text" placeholder='Имя'  />
                        <input type="text" placeholder='Фамилия'  />
                        <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AgroRegister