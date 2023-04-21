import CardInput from "./CardInput";
import CardButton from "./CardButton";
import CardList from "./CardList";
import "./Card.scss";
import { useState } from "react";

export default function Card() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  function getValue(value) {
    // console.log(value);
    setInputValue(value);
    
  }

  function btnHandler() {
   setList([...list, inputValue]) 
    
  setInputValue('')
  }
  // console.log({ list });
  return (
    <div className="card">
      <CardInput getValue={getValue} value={inputValue}  />

      <CardButton submit={btnHandler} />

      <CardList list={list} />
    </div>
  );
}
