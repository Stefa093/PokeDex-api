import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../../store/slices/userName.slice";

const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.search.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form onSubmit={submit} className="pokedex__form">
      <input
        id="search"
        className="pokedex__input"
        type="text"
        placeholder="Your name here..."
      />
      <button className="pokedex__btn">Let's Start!</button>
    </form>
  );
};

export default FormHome;
