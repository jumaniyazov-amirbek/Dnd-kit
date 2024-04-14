import { useState } from "react";
import add from './svg/LogoToAdd.svg'
export const Input = ({addTask}) => {

  const [input , setInput] = useState("") 

  function addTextTask(){
    setInput("")
    addTask(input)
  }
  
  function changeInput(e) {
    setInput(e.target.value)
    console.log(e);
  }


  return (
    <div className="continer">
      <input type="text" className="input" value={input} onChange={(e) => changeInput(e)}/>
      <button onClick={() => addTextTask()}>  <img src={add} alt="" /> </button>
    </div>
  );
};
