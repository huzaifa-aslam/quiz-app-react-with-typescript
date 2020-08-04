export  interface Quiz{
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

export interface Question_type{
    question: string
    correct_answer: string
    options:string[]
}

export interface questionProp{
    question:string
    options:string[]
    callback:(e:React.FormEvent<EventTarget>,ans:any)=>void
    userName:string
  }

export interface nameType{
    getName:(e:React.FormEvent<EventTarget>,name:string)=>void
}

