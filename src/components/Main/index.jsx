import React from 'react';
import foto from '../../assets/Group 77.png';
import './main.css'

const Main = () => {
  return (
    <section className='main'>
      <img className='main--photo' src={foto} alt="" />
      <h1 className='main--header'>Choose the experience</h1>
      <p className='main--text'>Join unique adrenalin adventure and enjoy adrenalin activity.</p>
    </section>
  )
}

export default Main