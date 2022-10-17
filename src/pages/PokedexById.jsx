import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/shared/Header'
import './styles/pokedexById.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => {
      console.log(err)
      setHasError(true)})
  }, [])

  if (hasError) {
    return <Pokemon404/> 
  }

  return (
    <article className='id-container'>
      <Header/>
      <main className='id-card-container'>
      <header className={`id-header bg-${pokemon?.types[0].type.name}`}>
        <img
            className='id-header_img'
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
      </header>
      <section className='id-name'>
        <h2 className='id-place'># {pokemon?.id}</h2>
        <h2 className={`id-name_title letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
      </section>
      <div className="">
        <ul className="id-info">
            <li className="id-card">
              <span className="id-card_label">Weight</span>
              <span className='id-card_number'>{pokemon?.weight}</span>
            </li>
            <li className="id-card">
              <span className="id-card_label">Height</span>
              <span className='id-card_number'>{pokemon?.height}</span>
            </li>
        </ul>
      </div>
        <div className='id-type'>
          <div>
            <h2 className='id-type_title'>Type</h2>
            <ul className="id-type_list">
            {pokemon?.types.map((type => (
              <li key={type.slot} className={`id-type_listem type-${type.type.name}`}>{type.type.name}</li>
              )))}
            </ul>
          </div>
          <div>
            <h2 className='id-abili_title'>Abilities</h2>
            <ul className="id-abili_list">
            {pokemon?.abilities.map((ability => (
              <li key={ability.slot} className="id-abili_listem">{ability.ability.name}</li>
              )))}
            </ul>
          </div>
        </div>
        <div className='id-stats'>
          <h2 className='id-stat_title'>Stats</h2>
        <ul className="graph">
          {pokemon?.stats.map((stat) => (
            <li key={stat.stat.name} className="">
              <span className="id-stat_name">{stat.stat.name}</span>
              <span style={{width: `${stat.base_stat}`}} className="bar">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
        </div>
        <div className='id-moves'>
          <h2 className='id-moves_title'>Movements</h2>
        <ul className="id-moves-card">
          {pokemon?.moves.map((move => (
            <li key={move.slot} className="id_move_item">{move.move.name}</li>
            )))}
        </ul>
        </div>
      </main>
    </article>
  )
}

export default PokedexById