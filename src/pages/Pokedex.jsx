import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {
  
  const userName = useSelector(state => state.userName)
  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else{
        const URL = 'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0'
        axios.get(URL)
          .then(res => setPokemons(res.data.results))
          .catch(err => console.log(err))
    }
  }, [typeSelected])

  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;
  
  // const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='poke-container'>
      <Header/>
      <div className='poke-text'>
      <p >Welcome <span className='poke-span'>{userName}</span>, here you can find your favorite pokemon.</p>
      </div>
      <aside className='poke-aside'>
        <InputSearch/>
        <SelectByType
        setTypeSelected={setTypeSelected}
        setCurrentPage={setCurrentPage}/>
        <Pagination 
        currentPage={currentPage}
        pagesLength = {pokemons && Math.ceil(pokemons.length / postPerPage)}
        setCurrentPage={setCurrentPage}/>
      </aside>
      <main>
        <div className='card__container'>
          {
          pokemons?.slice(firstPostIndex, lastPostIndex).map(pokemon => (
            <CardPoke
              key={pokemon.url} 
              url={pokemon.url}
            />
          ))
          }
        </div>
      </main>
      <Pagination 
        currentPage={currentPage}
        pagesLength = {pokemons && Math.ceil(pokemons.length / postPerPage)}
        setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Pokedex