import {  useEffect, useState } from 'react'
//import { useLayoutEffect } from 'react/cjs/react.development'
import style from './styles.module.css'

const CardPurchase = ({imagen,descripcion,valor,nombre,counter,setTotalValue,id}) => {

    const [countCardCar,setCountCardCar]=useState(counter)

   
    const fullValueFunction = valor*countCardCar

    useEffect(()=>{
        setTotalValue(e=>[...e,fullValueFunction])
    },[countCardCar])

   

    const increment = () =>{
        setCountCardCar(countCardCar+1)
    }

    const decrement = () => {
        setCountCardCar(countCardCar-1)
        setTotalValue((e)=>(e+fullValueFunction))
    }

    const reset = () => {
        setCountCardCar(0)
    }
    
    return (
        <div key={id} className={style.card__cont} style={(countCardCar===0)?{display:'none'}:null}>
            <div className={style.card__contImg}>
                <img src={imagen} alt={nombre}/>
            </div> 
            <div className={style.card__contInfo}>

                <h2>{nombre}</h2>
                <p className={style.card__textDescription}>{descripcion}</p>
                <p className={style.card__contInfoValue}>{`Valor Total: ${fullValueFunction} `}</p>
                <div className={style.card__contInfoButton}>
                    <button className={style.card__contInfoButtonSuma} onClick={increment}>+</button>
                    <div className={style.card__contInfoButtonR}>{countCardCar}</div>
                    <button className={style.card__contInfoButtonResta} onClick={decrement}>-</button>
                </div>

                <button className={style.card__contInfoButtonAnadir} onClick={reset}>Quitar del carrito</button>

                </div>
            
        </div>
    )
}
export default CardPurchase;