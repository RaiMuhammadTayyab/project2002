import React, { useState } from 'react';
import {proptype} from './../types'

const Card:React.FC<proptype>=({Question,Options,CallBack})=>{
  let [selectedAns,setselectedAns]=useState("")
const handleselection=(e:any)=>{
 setselectedAns(e.target.value)
}
  return (
    <div className="QuestionContainer">
      <div className="Question"> 
      <h3>{Question}</h3>
        </div>
        <form onSubmit={(e:React.FormEvent<EventTarget>) => CallBack(e,selectedAns)}>
          {Options.map((opt:string,ind:number)=>{
return(
<div key={ind}>
  <label className="Radio">
            <input
           type= "radio"
           name="opt"
           required
           checked={selectedAns===opt}
          value={opt}
           onChange={handleselection}
            />{opt}
          </label>
          </div>)}
          )}
          <input type="submit" className="submit"/>
        </form>
    </div>
  );
}

export default Card;
