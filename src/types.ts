import React from 'react'


export type Questiontype={

category: string
correct_answer: string
difficulty: string
incorrect_answers: string []
question: string
type: string
}

export type typequiz={

    Question:string
    Option:string []
    answer: string 
    correct_answers: string
}
export type proptype={

    Question:string
    Options:string[]
    CallBack:(e:React.FormEvent<EventTarget>, ans:string)=>void
}