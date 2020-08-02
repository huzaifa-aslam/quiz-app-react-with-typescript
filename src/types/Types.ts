import React from 'react'
export type Quiz={
    category: string
type: string
difficulty: string
question: string
correct_answer: string
incorrect_answers: string[]
}

export type Question_type={
    question: string
    correct_answer: string
    option: string[]
    answer:string
}
export interface questionProps{
    question:string
    option:string[]
    callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
}