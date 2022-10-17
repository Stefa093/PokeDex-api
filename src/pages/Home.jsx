import React from 'react'
import FormHome from '../components/home/FormHome'
import Footer from '../components/shared/Footer'
import './styles/home.css'


const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/images/pokedex.png" alt="" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hello Trainer!</h2>
        <p className='pokedex__text'>To start, give me your name</p>
      </header>
      <FormHome/>
      <Footer />
    </article>
  )
}

export default Home