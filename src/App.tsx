import React,{useEffect,useState} from 'react';
import './App.css';
import {QuizData} from './services'
import {Question_type} from './types/QuizType'
import {QuestionCard,Result,GetName} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

let [quiz,setQuiz]=useState<Question_type[]>([])
let [currentQuestion,setcurrentQuestion]=useState(0)
let [ans,setAnswer]=useState("")
let [score,setScore]=useState(0)
let [name,setname]=useState('')
let [showScore,setshowScore]=useState(false)

  useEffect(()=>{

    const getApi=async()=>{
      const quizData:Question_type[]=await QuizData("easy",3)
      setQuiz(quizData)
      console.log(quizData)
    }
    getApi()
  },[])


function getUserName(e:React.FormEvent<EventTarget>,uName:string){
  e.preventDefault()
  setname(uName)
  console.log(uName)
}

  function handleSubmit(e:React.FormEvent<EventTarget>,answer:any){
    e.preventDefault()
    setAnswer(answer)
    
    if(answer===quiz[currentQuestion].correct_answer){
      setScore(++score)
      console.log(score)
    }
    if(currentQuestion!==quiz.length-1){

      setcurrentQuestion(++currentQuestion)
    }
    else{
      //alert(`quiz is completed`)
      //setcurrentQuestion(0)
      setshowScore(true)
    }
  }

if(!quiz.length){
  return <h3>Please wait....</h3>
}

  return (
    <div className="App">
    {name==="" ? <GetName getName={getUserName}/> : ""}
    {/* <GetName getName={getUserName}/> */}
     { !showScore ?  <QuestionCard callback={handleSubmit} userName={name}  question={quiz[currentQuestion].question} options={quiz[currentQuestion].options} /> :  <Result score={score} totalQuestion={quiz.length} userName={name}/>}

    </div>
  );
}

export default App;
