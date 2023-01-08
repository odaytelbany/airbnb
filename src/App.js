import React from 'react'
// import components 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
// css style
import '../src/App.css'
// import imgages
import card1 from './images/card1.png'

// import cards data
import data from './data.js'
//=========================================================

export default function App() {

  // console.log(data)
  const cards = data.map((items) => {
    return (
      <Card 
        key={items.id}
        {...items}
        // src={card1}
      />
    )
  })
  return (
    <div>
        <Navbar />
        <Hero />
        <div className='cards'>
          {cards}
        </div>

    </div>                                                      
  )
}
