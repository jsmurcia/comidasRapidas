import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Card = ({nombre,imagen,descripcion,valor}) =>{

    const iconCar =<FontAwesomeIcon icon ={faShoppingCart} className='icon'/>
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
                    <button className='card__cont-info-buttonSuma'>+</button>
                    <div className='card__cont-info-buttonR'>0</div>
                    <button className='card__cont-info-buttonResta'>-</button>
                </div>

                <button className='card__cont-info-buttonAnadir'>Añadir al carrito...{iconCar}</button>

            </div>
        </div>
    )
}
export default Card 