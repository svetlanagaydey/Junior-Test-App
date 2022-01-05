import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './TestComponent.css';
import TestsList from './TestList';


const TestComponent = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [checked, setChecked] = useState([]);
	const [totalAnswer, setTotalAnswer] = useState([]);
	
  //localStorage.setItem('total', JSON.stringify(totalAnswer));
	const currentTopic = localStorage.getItem('topic');
	let index = TestsList.findIndex(el => el.name === currentTopic);
	const questionsObject = TestsList[index];
	const questionsList = questionsObject.list;
	console.log(questionsList)
	

	const handleChecked = (e) => {
    let prev = checked;
    let itemIndex = prev.indexOf(e.target.id);
    if (itemIndex !== -1) {
      prev.splice(itemIndex, 1);
    } else {
      prev.push(e.target.id);
    }
		setChecked([...prev]);
		setAnswers([{
			currentQuestion: questionsList[currentQuestion].questions[0].questionText,
			currentAnswer: checked,
			writeAnswer: questionsList[currentQuestion].questions[0].writeOptionInex,
		}]);
  }

	function toNext()  {
		if (currentQuestion < questionsList.length-1) {
			const temp = [...totalAnswer];
			temp.push(answers);
			setTotalAnswer(temp);
			setCurrentQuestion(currentQuestion + 1);
		}
		if ((currentQuestion === questionsList.length-1)&&(totalAnswer.length!==questionsList.length)) {
			const temp = [...totalAnswer];
			temp.push(answers);
			setTotalAnswer(temp);
			// console.log('The end!')
		} 

	}
	const setCurrentAnswer = (e) => {
		setAnswers([{
			currentQuestion: questionsList[currentQuestion].questions[0].questionText,
			currentAnswer: [...e.target.id],
			writeAnswer: [questionsList[currentQuestion].questions[0].writeOptionInex],
		//	isWrite: e.target.id==questionsList[currentQuestion].questions[0].writeOptionInex,
		}]);
	}

	useEffect(() => {	
		console.log(answers);
	}, [answers]);
	useEffect(() => {	
		//if (totalAnswer.length===questionsList.length) console.log(totalAnswer);
	}, [totalAnswer]);

	return (
		<div className='container test-page'>
			 <header className='header'>
                <Link to="/" className='toMain'>To Main</Link>
                <ul className="header_rigth-nav">
                    <Link to="/hystory"> To Hystory</Link>
                    <Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
                </ul>
            </header>
			<h2>{currentTopic} Test started</h2>
			<div className='progress-timer'>
				<span className='test-progress'>Progress {currentQuestion+1} from {questionsList.length}</span>
				<span className='test-timer'>Timer $ : $</span>
			</div>
			<div className='test-content'>
				<div className='prev-question'></div>
				<div className='test-card'>
					<h3 className='card-qwestion'>{questionsList[currentQuestion].questions[0].questionText}</h3>
					<ul className='questionsList'>
						{questionsList[currentQuestion].questions[0].options
						.filter(() => questionsList[currentQuestion].questions[0].writeOptionInex.length===1)
						.map((answer, index) => {
							return (
								<li key={index} className='answer'>
									<input type="radio" id={index} name='radio' onChange={setCurrentAnswer} />
									<label htmlFor={index}>{answer}</label>
								</li>
							)
						})}
						{questionsList[currentQuestion].questions[0].options
						.filter(() => questionsList[currentQuestion].questions[0].writeOptionInex.length>1)
						.map((answer, index) => {
							return (
								<li key={index} className='answer'>
								<input type="checkbox" id={index} onChange={(e) => handleChecked(e, index)}/>
								<label htmlFor={index}>{answer}</label>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='next-question' onClick={toNext}></div>
				<Link to={{
					pathname: "/result",
					state: {totalAnswer},
					}} className="submit-button" >
					Submit
				</Link>
			</div>
			
		</div>
	)
}
export default TestComponent;