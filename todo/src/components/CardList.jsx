import { useState } from "react";

export default function CardList(props) {
  // const array = props.list.map((item) => {
  //   return <li>item</li>;
  // });
  // console.log(props.list);
  const [value,setValue]=useState('')
const added = (item)=>{
setValue(item)
}

  function remove(item) {
    console.log(props.list);
    console.log(props.key);
    console.log(item);
    let arr = props.list.filter((item)=>  item.includes(item)).map(e => {
      return <ul>
        <li>e</li>
      </ul>
    })
   return arr

  }
console.log(props.key);
 
  return (
    <ul className="card-list">
      
      {props.list.map((item) => {
        return (
          <li>
            {item}
            <button onClick={()=>{
              added(item)
            }}>+</button>
            <button 
              onClick={() => {
                remove(item);
              }}
            >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
