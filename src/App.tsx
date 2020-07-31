import React,{useState,useEffect} from 'react';
import Card from "./components/cards";
import {get_question} from './Api'
import './App.css';
import { typequiz } from './types';

function App() {
  const[quiz,setquiz]=useState<typequiz[]>([])
  let [currentstep,setcurrentstep]=useState(0)
  let[score,setScore]=useState(0)
  let[result,setResult]=useState(false)
  useEffect(()=>{
   async function fetchdata(){
      const questions:typequiz[]= await  get_question(8,'easy');
      setquiz(questions)
    }
      fetchdata()
    },[])
const submithandle=(e:React.FormEvent<EventTarget>,userAns:string)=>{
  e.preventDefault()
  
  const currentquestion:typequiz = quiz[currentstep];
  if (userAns===currentquestion.answer)
  setScore(++score)
  console.log(score)
  if (currentstep !== quiz.length-1)
 setcurrentstep(++currentstep)
  else{ 

    setResult(true)
   }}
   if (!quiz.length)
  return<h3>loading...</h3>
  if(result){
    return( <div className="QuestionContainer result-container">

      <h2> Result</h2>
<p>
  your Final Score is <b>{score}</b> out of <b>{quiz.length}</b>
</p></div>
    )
  }
  return (
    <div className="App"> 
    <h1>QuizApp</h1>
      <Card 
            Question={quiz[currentstep].Question}
            Options ={quiz[currentstep].Option}
            CallBack = {submithandle}     
      />  
    </div>
  );
}

export default App;
