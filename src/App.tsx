import React,{useEffect} from 'react';
import Card from "./components/cards";
import {get_question} from './Api'
import './App.css';
import { typequiz } from './types';
function App() {
  useEffect(()=>{
   async function fetchdata(){
      const questions:typequiz[]= await  get_question(10,'medium');
      console.log(questions)
    }
       
      fetchdata()
    },[])



  return (
    <div className="App">
      
      
      <Card/>

        
    </div>
  );
}

export default App;
