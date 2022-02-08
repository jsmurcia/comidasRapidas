
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


function App() {

  const iconCar =<FontAwesomeIcon icon ={faShoppingCart} className='icon'/>

  const [answerCard,setAnwerCard]=useState([]);
  const [text,setText]=useState('');
  const [contentCarShopping,setContentCarShopping]=useState([]);

  console.log(contentCarShopping)

    const valueFilter = productos.filter((character)=>{
      const characterText=character.nombre.toLowerCase()
      const searchText=text.toLowerCase()
      return characterText.includes(searchText)
    })

    const searchValue = () => {
      setAnwerCard(valueFilter)
    }

  return (
    <>
      <Header>
        <Logo/>
        <Description>
          <Mensaje/>
          <ContButtons>
            <ButtonCarrito/>
            <TotalValue/>
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
              key={cosa.nombre}
              imagen={cosa.imagen}
              nombre={cosa.nombre}
              descripcion={cosa.descripcion}
              valor={cosa.valor}
              setContentCarShopping={setContentCarShopping}
              
            />
          ))
          :
          productos.map(cosa=>(

            <Card
              key={cosa.nombre}
              imagen={cosa.imagen}
              nombre={cosa.nombre}
              descripcion={cosa.descripcion}
              valor={cosa.valor}
              setContentCarShopping={setContentCarShopping}
              
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
          (contentCarShopping.length>=1)?contentCarShopping.map(element=>(
          <CardPurchase
            imagen={element.imagen}
            descripcion={element.descripcion}
            valor={element.valor}
            nombre={element.nombre}
            counter={element.counter}
          />
          
          )):
          null
        }
      </ContainPurchase>

      <ContainSendWhatsapp>
        <TotalValue/>
      </ContainSendWhatsapp>

    </>
  );
}

export default App;
