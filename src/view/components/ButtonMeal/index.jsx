import './styles.css'

import productos from '../../../comidasRapidas'

const ButtonMeal = ({setAnwerCard,caracteristica}) => {

    const selecDrink = () => {
        const setMeal=productos.filter(product=>product.caracteristica!=={caracteristica})
        setAnwerCard([...setMeal])
    }

    return(
        <button onClick={()=>selecDrink()} className='buttonMeal'>COMIDAS RAPIDAS</button>
    )
}

export default ButtonMeal;