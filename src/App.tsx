import React,{useEffect,useState, FormEvent} from 'react';
import {Quiz,Question_type} from './types/Types'
import './App.css';
import {FetchQuiz} from './services'
import QuestionCard from './components/QuestionCard'

function App() {
  let  [quiz,setQuiz]=useState<Question_type[]>([])
  let  [currentStep,setCurrentStep]=useState(0)
  let  [userInput,setUserInput]=useState("")
  let  [score,setScore]=useState(0)
  useEffect(()=>{
   async function FetchData(){
     const question:Question_type[]=await FetchQuiz(5,"easy")
     setQuiz(question)
     console.log( 'question',question)
   }
   FetchData()
  },[])

  function handlerSubmit(e:React.FormEvent<EventTarget>,ans:string){
    e.preventDefault()
    const myAns:Question_type=quiz[currentStep]
if(ans===myAns.correct_answer){
  setScore(++score)
}
    if(currentStep!==quiz.length-1){

      setCurrentStep(++currentStep)


    }else{
      setCurrentStep(0)
      alert(`quiz is completed`)

      alert(`your score is ${score}`)
      setScore(0)

    }
    console.log(myAns.correct_answer)
    console.log(ans)
  }

  if(!quiz.length)
    return <h3>Loading...</h3>

  return (
    <div className="App">
      <QuestionCard question={quiz[currentStep].question} option={quiz[currentStep].option} callback={handlerSubmit}/>
    </div>
  );
}

export default App;
