import React from 'react'
import imgGrid from '../images/img-grid.png'
export default function Hero() {
  return (
    <section className='hero'>
        <img src={imgGrid} alt="" className='imgGrid'></img>
        <h1 className='title'>Online Experiences</h1>
        <p className='text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
