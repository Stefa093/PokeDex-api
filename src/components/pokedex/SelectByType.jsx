import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../components/pokedex/styles/selectByType.css'

const SelectByType = ({setTypeSelected, setCurrentPage}) => {
  const [types, setTypes] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
    setCurrentPage(1)
  }

  return (
    <select onChange={handleChange} className='poke-select'>
      <option value="All Pokemons">All Pokemons</option>
      {types?.map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectByType;
