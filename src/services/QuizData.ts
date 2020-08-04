import {Question_type,Quiz} from './../types/QuizType'
export const shuffleArray=(array:any[])=>[...array].sort(()=>Math.random()-0.5)
 const QuizData=async(level:string,amount:number): Promise <Question_type[]> =>{
    const api=await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`)
  const {results}=await api.json();
  const modified:Question_type[]=results.map((item:Quiz)=>{
    return{
        question:item.question,
        correct_answer:item.correct_answer,
        options:shuffleArray(item.incorrect_answers.concat(item.correct_answer))

    }
  })
 return modified

}
export default QuizData;