


import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'


const ButtonToWhatsapp = ({contentCarShopping, resultTotalValue }) => {
    const [messageWhatsapp, setMessageWhatsapp] = useState("")



    useEffect(() => {
        
        let text="Hola, mi pedido es: %0A"
        contentCarShopping.map( item => (
            text += item.counter + " - " + item.nombre +", %0A" 
        ));

        text += "Total : $" + resultTotalValue

        setMessageWhatsapp(text)

    }, [contentCarShopping,resultTotalValue])
    
  return (
      <div className={styles.container__ButtonToWhatsapp}>
          <a href={`https://wa.me/+573192982166?text=${messageWhatsapp}`} target={'_blank'} rel="noreferrer">enviar</a>
          
      </div>
  )
}

export default ButtonToWhatsapp

