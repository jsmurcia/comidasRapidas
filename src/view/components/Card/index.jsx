import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import style from './styles.module.css'
import { useState } from 'react'

const Card = ({nombre,imagen,descripcion,valor,setContentCarShopping,id}) =>{

    const iconCar =<FontAwesomeIcon icon ={faShoppingCart} className='icon'/>
    
    const [count,setCount]=useState(0)
    
    let infoProduct = {
        "id":id,
        "imagen":imagen,
        "descripcion":descripcion,
        "valor":valor,
        "nombre":nombre,
        'counter':count
    };

    const increment = () =>{
        setCount(count+1)
    };

    const decrement = () => {
        (count>=1)?
        setCount(count-1)
        : setCount(0)
    };

    const clickSent=()=>{
        setContentCarShopping((prep)=>[...prep,infoProduct])
    }
    
    return (
        <div className={style.card__cont} key={id}>
            <div className={style.card__contImg}>
                <img src={imagen} alt={nombre}/>
            </div> 

            <div className={style.card__contInfo}>

                <h2>{nombre}</h2>

                <p className={style.card__textDescription}>{descripcion}</p>
                <p className={style.card__contInfoValue}>{`Precio: $${valor}`}</p>

                <div className={style.card__contInfoButton}>
                    <button className={style.card__contInfoButtonSuma}  onClick={increment}>+</button>
                    <div className={style.card__contInfoButtonR}>{count}</div>
                    <button className={style.card__contInfoButtonResta} onClick={decrement}>-</button>
                </div>

                <button 
                    className={style.card__contInfoButtonAnadir}
                    onClick={()=>clickSent()}
                >
                    Añadir al carrito...{iconCar}
                </button>

            </div>

        </div>

    )
}
export default Card 