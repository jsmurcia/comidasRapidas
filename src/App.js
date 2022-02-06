
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


function App() {


  let searchCharacters =[]
  const [answerCard,setAnwerCard]=useState([]);
  const [text,setText]=useState('')

  

  searchCharacters=productos.filter((character)=>{
    const characterText=character.nombre.toLowerCase()
    const searchText=text.toLowerCase()
    return characterText.includes(searchText)
  })
  console.log(searchCharacters)
  
 

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
          <InputSearch text={text} setText={setText}/>
        </CountSearch>

        {
          (answerCard.length>1)?answerCard.map(cosa=>(
            <Card
              key={cosa.nombre}
              imagen={cosa.imagen}
              nombre={cosa.nombre}
              descripcion={cosa.descripcion}
              valor={cosa.valor}
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
            />
          ))
         }

        
        

      </ContCard>
    </>
    
  );
}

export default App;
