import React, { useEffect } from 'react';
import FormQuestion from '../FormQuestion/FormQuestion';
import UsersQuestionsList from './UsersQuestionsList';
import {useState} from 'react'


const AddQuestionPage = () => {
    const[userQuestions, setUserQuestion] = useState([]);
    const[curQuest, setCurQuest] = useState('');
    useEffect(() => {
        console.log('delete useEfect')
    }, [userQuestions])

    const handleChange = (e) => {
        setCurQuest(e.target.value);
    }
    const addQuestion = (e) => {
        e.preventDefault()
        if(curQuest!=='') {
            let temp = userQuestions;
            temp.push(curQuest);
            setUserQuestion(temp);
            setCurQuest('')
            // setCurQuest([]);
            // setUserQuestion('');
        }
    }
    function deleteQuestion(ind) {
        const questions = userQuestions;
        questions.splice(ind, 1);
        console.log(questions)
        setUserQuestion(questions);
        console.log(userQuestions)
    }   
    const printList = userQuestions.length
        ?
        (userQuestions.map((question, index) => {
            return <UsersQuestionsList question={question} key={index} index={index} deleteQuestion={deleteQuestion}  />
        }))
        : <span>It is now questions from users yet!)))</span>;

     

    return (
        <div>
            <h2>Live your question here:</h2>
            <FormQuestion handleChange={handleChange}
                addQuestion={addQuestion}
                curQuest={curQuest}
             />
            {printList}
        </div>
    )
}
export default AddQuestionPage;