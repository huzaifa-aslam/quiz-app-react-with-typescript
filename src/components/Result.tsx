import React from 'react'
import './Result.css'

function Result({score,totalQuestion,userName}:any){



    return(
       <div className="result">
           <h2>Quiz is Completed</h2>
           <h3 >{userName} Your Score is {score} out of {totalQuestion} </h3>
       </div>
    )
}
export default Result