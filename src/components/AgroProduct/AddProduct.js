import React from 'react'
import Style from './AddProduct.module.css'
import logo from '../../assets/img/logoAgro.png'



const AddProduct = () => {
    return (
        <div className={Style.main} >
            <div className={Style.inMain} >    
                <div className={Style.logo} style={{backgroundImage:`url(${logo})`}} ></div>
            <div className={Style.add} >
                <h4>
                    ДОБАВИТЬ ТОВАР (ПРОДУКЦИЯ)
                </h4>
               <div className={Style.select} >
               <select>
                    <option value="0" key="">Категория</option>
                    <option value="овес" key="овес">Овес</option>
                    <option value="сыр" key="сыр">Сыр</option>
                    <option value="мясо" key="мясо">Мясо</option>
                </select>
               </div>
                <div className={Style.btn} >
                <button>
                    ДАЛЕЕ
                </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddProduct