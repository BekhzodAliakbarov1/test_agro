import React from 'react';
import style from './SearchCards.module.css'
import wheat from '../../assets/img/wheat.jpg'


const datas = [
    {
        image: wheat, 
        text: 'Овес чистый, не сорный', 
        subText: 'Последный урожай',
        cost: '0.18 Р за 100 гр',
        place: 'Москва, Московской область',
        data: '27 январяб 15:18'
    },
    {
        image: wheat, 
        text: 'Овес чистый, не сорный', 
        subText: 'Последный урожай',
        cost: '0.18 Р за 100 гр',
        place: 'Москва, Московской область',
        data: '27 январяб 15:18'
    },
    {
        image: wheat, 
        text: 'Овес чистый, не сорный', 
        subText: 'Последный урожай',
        cost: '0.18 Р за 100 гр',
        place: 'Москва, Московской область',
        data: '27 январяб 15:18'
    },
    {
        image: wheat, 
        text: 'Овес чистый, не сорный', 
        subText: 'Последный урожай',
        cost: '0.18 Р за 100 гр',
        place: 'Москва, Московской область',
        data: '27 январяб 15:18'
    },
    {
        image: wheat, 
        text: 'Овес чистый, не сорный', 
        subText: 'Последный урожай',
        cost: '0.18 Р за 100 гр',
        place: 'Москва, Московской область',
        data: '27 январяб 15:18'
    },
    {
        image: wheat, 
        text: 'Овес чистый, не сорный', 
        subText: 'Последный урожай',
        cost: '0.18 Р за 100 гр',
        place: 'Москва, Московской область',
        data: '27 январяб 15:18'
    },
]


function SearchCards() {
    return (
        <div className={style.main}>
            <form>
                <input type="text" placeholder='Поиск в Маскве' />
            </form>
            <div className={style.cards}>
                {
                    datas.map((data,index) => {
                        return(
                            <div key={index} className={style.card}>
                                <div className={style.image} style={{backgroundImage: `url(${data.image})`}}></div>
                                <div className={style.info}>
                                    <h4>{data.text}</h4>
                                    <h4>{data.subText}</h4>
                                    <h1>{data.cost}</h1>
                                    <p>{data.place}</p>
                                    <p>{data.data}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchCards
