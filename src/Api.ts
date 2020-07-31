import {Questiontype,typequiz} from './types'
const shuffleArray=(array:any[])=>
[...array].sort(()=>Math.random()-0.5)

export const get_question = async(totalQuestions:number,level:string):Promise<any>=>{

    const response= await fetch ('https://opentdb.com/api.php?amount='+totalQuestions+'&category=9&difficulty='+level+'&type=multiple')
    const {results}=  await response.json()
    
const Quiz:typequiz[]= results.map((resultObj:Questiontype)=>{
   return {
    Question:resultObj.question,
    Option: shuffleArray(resultObj.incorrect_answers.concat(resultObj.correct_answer)),
    answer: resultObj.correct_answer,
    correct_answers: resultObj.correct_answer
}
   })
   return Quiz

}
