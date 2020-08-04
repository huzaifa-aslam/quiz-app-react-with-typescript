import React,{useState} from 'react'
import {questionProp} from './../types/QuizType'

import './QuestionCard.css'




const QuestionCard=({question,options,callback,userName}:questionProp)=>{

  let [answer,setAnswer]=useState("")

function getValue(e:any){
  setAnswer(e.target.value)
}


    return (
      <section className="cardSection">
        <div className="card">
         <h3>  Developed By<br/> Huzaifa Aslam</h3>

<form onSubmit={(e:React.FormEvent<EventTarget>)=>{callback(e,answer)}}>
{question}
           {options.map((val:string,ind:number)=>{
           return(
             <div key={ind}>
              <input
                type="radio"
                name="option"
                value={val}
                required
                onChange={getValue}
                checked={answer===val}
              />
              <label>{val}</label>


              </div>
           )
         })}
         <div className="nextBtn">
         <button type="submit">Next</button>

         </div>

         </form>
        </div>
        </section>
      );
}
export default QuestionCard;