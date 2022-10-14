import React, { useState } from "react";
import { onSearch } from "../Redux/actions";
import {useDispatch} from "react-redux";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch()

  const handlerInput =(e) => {
    setCity(e.target.value)
  }
  const handlerSubmit =(e) => {
    dispatch(onSearch(city))
    setCity("")
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=> {
          handlerInput(e)
        }}
      />
      <input type="submit" value="Agregar" onClick={(e) => {
        handlerSubmit()
      }}/>
    </form>
  );
}
