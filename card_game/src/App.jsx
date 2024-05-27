import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import Create from './components/createCard.jsx'
import './App.css'

function App() {

  const cards = [
    {name:"Stimpacks",cost:5, img:'./src/components/img/stimpacks.png',description:"Recover 30hp and nullify 1 malus",type:"HEAL"},
    {name:"Toughness",cost:3, img:'./src/components/img/toughness.png',description:"Reduce every incoming damage of 50%",type:"BONUS"},
    {name:"Gun Fu",cost:4, img:'./src/components/img/gun_fu.png',description:"Shoot 3 target at once dealing 15hp each",type:"ATTACK"},
    {name:"Intimidation",cost:2, img:'./src/components/img/intimidation.png',description:"Choose one target and disable it",type:"MALUS"},
  ];

  return (
    <div className='card'>
        <Create name="TODO" cost="0" img="https://i.gifer.com/XOsX.gif" description="TODO" type="TODO"/>
        {cards.map((card,index) => (
            <div key={index}>
                <Card name={card.name} cost={card.cost} img={card.img} description={card.description} type={card.type} />
            </div>
        ))}
    </div>
  )
}

export default App
