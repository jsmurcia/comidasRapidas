import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { useState } from 'react'

const Card = ({nombre,imagen,descripcion,valor}) =>{

    const iconCar =<FontAwesomeIcon icon ={faShoppingCart} className='icon'/>

    const [count,setCount]=useState(0)
    const increment = () =>{
        setCount(count+1)
    }

    const decrement = () => {
        (count>=1)?
        setCount(count-1)
        : setCount(0)
    }
 
    return (
        <div className='card__cont'>
            <div className='card__cont-img'>
                <img src={imagen} alt={nombre}/>
            </div> 

            <div className='card__cont-info'>

                <h2>{nombre}</h2>

                           
                
                <p className='card__text-description'>{descripcion}</p>
                <p className='card__cont-info-value'>{`Precio: $${valor}`}</p>
                <div className='card__cont-info-button'>
                    <button className='card__cont-info-buttonSuma'  onClick={increment}>+</button>
                    <div className='card__cont-info-buttonR'>{count}</div>
                    <button className='card__cont-info-buttonResta' onClick={decrement}>-</button>
                </div>

                <button className='card__cont-info-buttonAnadir'>Añadir al carrito...{iconCar}</button>

            </div>
        </div>
    )
}
export default Card 