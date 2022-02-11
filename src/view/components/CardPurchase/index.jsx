
//import { useLayoutEffect } from 'react/cjs/react.development'
import style from './styles.module.css'



const CardPurchase = ({imagen,descripcion,valor,nombre,counter,setTotalValue,id,setContentCarShopping,contentCarShopping}) => {


   
    const handdleCount = (num) => {

        
        const variable=contentCarShopping.map(item =>{

            if(item.id===id){
                return{...item,counter:counter+num}
            } else { return item }
        })
        
        setContentCarShopping(variable)

    }



    let fullValueFunction = valor*counter

   
    const pruebaPrecioGlobalReset = () => {
        const newValue=-fullValueFunction
        setTotalValue(e=>[...e,newValue]);
    }
 

    const pruebaPrecioGlobalsuma = () => {
        const newValue=(fullValueFunction+valor)-fullValueFunction
        setTotalValue(e=>[...e,newValue]);
    }

    const pruebaPrecioGlobalresta = () => {
        const newValueRest=fullValueFunction-fullValueFunction-valor
        console.log(newValueRest)
        setTotalValue(e=>[...e,newValueRest]);
    }

    const increment = () =>{

        handdleCount(+1)
        pruebaPrecioGlobalsuma()
        
    }

    const decrement = () => {
        handdleCount(-1)
        pruebaPrecioGlobalresta()
    }

    const reset = () => {
        handdleCount(-counter)
        pruebaPrecioGlobalReset()
    }
    
    return (
        <div key={id} className={style.card__cont} style={(counter===0)?{display:'none'}:null}>
            <div className={style.card__contImg}>
                <img src={imagen} alt={nombre}/>
            </div> 
            <div className={style.card__contInfo}>

                <h2>{nombre}</h2>
                <p className={style.card__textDescription}>{descripcion}</p>
                <p className={style.card__contInfoValue}>{`Valor Total: ${fullValueFunction} `}</p>
                <div className={style.card__contInfoButton}>
                    <button className={style.card__contInfoButtonSuma} onClick={increment}>+</button>
                    <div className={style.card__contInfoButtonR}>{counter}</div>
                    <button className={style.card__contInfoButtonResta} onClick={decrement}>-</button>
                </div>

                <button className={style.card__contInfoButtonAnadir} onClick={reset}>Quitar del carrito</button>

                </div>
            
        </div>
    )
}
export default CardPurchase;