import React,{useState} from 'react'
import {questionProps} from './../types/Types'

const QuestionCard=({question,option,callback}:questionProps)=>{
let [answer,setAnswer]=useState('')
const userAnswer=(e:any)=>{
    setAnswer(e.target.value)
   //console.log(e.target.value)

}

    return(
       <div>
           <div>
           {question}
           </div>
        <div>
                <form onSubmit={(e:React.FormEvent<EventTarget>)=>{callback(e,answer)}}>
                    {
                        // let randomOption=option
                        option.map((item:string,ind:number)=>{
                            return (
                                <div key={ind}>
                                <input type="radio" required={true} value={item} checked={answer===item} onChange={userAnswer}  ></input>
                               {item}
                                </div>

                            )
                        })
                    }
                    <button type="submit">Submit</button>
                </form>

        </div>


       </div>
    )

}
export default QuestionCard