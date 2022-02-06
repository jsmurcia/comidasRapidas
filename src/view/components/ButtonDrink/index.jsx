import productos from '../../../comidasRapidas'
import './styles.css'
import React from 'react';


const ButtonDrink =({setAnwerCard})=>{
    const selecDrink = () => {
        const setDrink=productos.filter(product=>product.caracteristica!=='comida')
        setAnwerCard([...setDrink])
    }

    return(<button onClick={()=>selecDrink()} className="buttonBebidas">BEBIDAS</button>)
}

export default ButtonDrink