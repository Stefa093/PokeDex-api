import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/inputSearch.css'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit} className='form-search'>
      <input id='search' type="text" placeholder="Search a pokemon" className="input-search" />
      <button className="btn-search">Search</button>
    </form>
  );
};

export default InputSearch;
