import "./CardInput.scss"

export default function Input(props){
function valueHandler(event) {
  // console.log(event.target.value);
  props.getValue(event.target.value)
}
  return <input type="text" value={props.value} onChange={valueHandler} className="input" />
}