
import {Quiz,Question_type} from './../types/Types'

export const shuffleArray=(array:any[])=>[...array].sort(()=>Math.random()-0.5)

const FetchQuiz=async(amount: number,difficulty: string): Promise<Question_type[]>=>{
    const api=await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
   const {results}=await api.json()
   console.log(results)
    const quiz:Question_type[]=results.map((item:Quiz)=>{
       return {
        question:item.question,
        answer: item.correct_answer,
        correct_answer:item.correct_answer,
        option:shuffleArray(item.incorrect_answers.concat(item.correct_answer)),
       }
    })
    return quiz
}
export default FetchQuiz