
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Header from './view/components/Header';
import Description from './view/components/Description';
import Logo from './view/components/Logo';
import Mensaje from './view/components/Mensaje';
import ButtonCarrito from './view/components/ButtonCarrito';
import TotalValue from './view/components/TotalValue';
import ContButtons from './view/components/ContButtons';
import ContCard from './view/components/ContCard';
import Card from './view/components/Card';
import productos from './comidasRapidas';
import ButtonDrink from './view/components/ButtonDrink';
import ButtonMeal from './view/components/ButtonMeal';
import CountSearch from './view/components/ContSearch';
import React,{ useState } from 'react';
import InputSearch from './view/components/InputSearch';
import styles from './App.module.css'
import ContainPurchase from './view/components/ContainPurchase';
import CardPurchase from './view/components/CardPurchase';
import ContainSendWhatsapp from './view/components/ContainSendWhatsapp';
import ButtonToWhatsapp from './view/components/ButtonToWhatsapp/ButtonToWhatsapp';


function App() {

  const iconCar =<FontAwesomeIcon icon ={faShoppingCart} className='icon'/>

  const [answerCard,setAnwerCard]=useState([]);
  const [text,setText]=useState('');
  const [contentCarShopping,setContentCarShopping]=useState([]);
  const [totalValue,setTotalValue]=useState([])


  
  console.log(contentCarShopping)

    const valueFilter = productos.filter((character)=>{
      const characterText=character.nombre.toLowerCase()
      const searchText=text.toLowerCase()
      return characterText.includes(searchText)
    })

    const searchValue = () => {
      setAnwerCard(valueFilter)
    }



  

  let resultTotalValue=0
  totalValue.forEach(numero=>{ resultTotalValue += numero})



  return (
    <>
      <Header>
        <Logo/>
        <Description>
          <Mensaje/>
          <ContButtons>
            <ButtonCarrito/>
            <TotalValue resultTotalValue={resultTotalValue}/>
          </ContButtons>         
        </Description>
      </Header>

      <ContCard>
        <CountSearch>
          
          <ButtonDrink setAnwerCard={ setAnwerCard} />
          <ButtonMeal setAnwerCard={setAnwerCard} caracteristica='bebidas'/>
          <InputSearch text={text} setText={setText} searchValue={searchValue}/>
          
        </CountSearch>

        {
          (answerCard.length>=1)?answerCard.map(cosa=>(
            <Card
              id={cosa.id}
              key={cosa.id}
              imagen={cosa.imagen}
              nombre={cosa.nombre}
              descripcion={cosa.descripcion}
              valor={cosa.valor}
              setContentCarShopping={setContentCarShopping}
              setTotalValue={setTotalValue}
                              
            />
          ))
          :
          productos.map(cosa=>(
            <Card
              id={cosa.id}
              key={cosa.id}
              imagen={cosa.imagen}
              nombre={cosa.nombre}
              descripcion={cosa.descripcion}
              valor={cosa.valor}
              setContentCarShopping={setContentCarShopping}
              setTotalValue={setTotalValue}
            />
          ))
         }

      </ContCard>

      <section>
        <div className={styles.cont}>
          <h2 className={styles.cont__carTitle}>carrito de compras<span>{iconCar}...</span></h2>
        </div>
      </section>

      <ContainPurchase>
        {

          (contentCarShopping.length>=1)&&contentCarShopping.map(element=>(
          <CardPurchase
            id={element.id}
            key={element.id}
            imagen={element.imagen}
            descripcion={element.descripcion}
            valor={element.valor}
            nombre={element.nombre}
            counter={element.counter}
            setTotalValue={setTotalValue}
            setContentCarShopping={setContentCarShopping}
            contentCarShopping={contentCarShopping}
          />
          
          ))
        }
      </ContainPurchase>

      <ContainSendWhatsapp>

        <TotalValue resultTotalValue={resultTotalValue}/>

        <ButtonToWhatsapp
          contentCarShopping={contentCarShopping}
          resultTotalValue={resultTotalValue}
        />

      </ContainSendWhatsapp>

    </>
  );
}

export default App;
