import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'

const Pokemon404 = () => {
  return (
    <div className='err-container'>
        <h1 className='card_err'>Pokemon not Found 🚫</h1>
        <Link className='card__link' to='/pokedex'>Return no Pokedex</Link>
    </div>
    
  )
}

export default Pokemon404