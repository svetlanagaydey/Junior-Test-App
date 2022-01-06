import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './TestComponent.css';
import TestsList from './TestList';


const TestComponent = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [checked, setChecked] = useState([]);
	const [totalAnswer, setTotalAnswer] = useState([]);
	const [seconds, setSeconds] = useState(90);
	
	const currentTopic = localStorage.getItem('topic');
	let index = TestsList.findIndex(el => el.name === currentTopic);
	const questionsList = TestsList[index].list;

	
    useEffect(() => {
        const interval = setInterval(() => {
            let temp = seconds - 1;
			setSeconds(temp);
		}, 1000);
		if (seconds===0) clearInterval(interval)
		return () => clearInterval(interval);
    }, [seconds]);

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
			temp[currentQuestion] = answers;
			setTotalAnswer(temp);
			setCurrentQuestion(currentQuestion + 1);
			console.log(totalAnswer);
		}
		if ((currentQuestion === questionsList.length-1)&&(totalAnswer.length!==questionsList.length)) {
			const temp = [...totalAnswer];
			temp.push(answers);
			setTotalAnswer(temp);
		} 
	}
	function toPrev() {
		if (currentQuestion!==0) {
			setCurrentQuestion(currentQuestion - 1);
			// const temp = [...totalAnswer];
			// temp[currentQuestion-1] = answers;
			// setTotalAnswer(temp);
			console.log(answers);
			console.log(currentQuestion);
		}
	}
	
	function setCurrentAnswer (e) {
		setAnswers([{
			currentQuestion: questionsList[currentQuestion].questions[0].questionText,
			currentAnswer: [...e.target.id],
			writeAnswer: [questionsList[currentQuestion].questions[0].writeOptionInex],
		//	isWrite: e.target.id==questionsList[currentQuestion].questions[0].writeOptionInex,
		}]);
	}
	const sec = seconds % 60;
	const min = Math.floor(seconds/60);
	function format(num) {
		if (num<10) return `0${num}`
		else return num
	}

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
				<span className='test-timer'> {format(min)} : {format(sec)}</span>
			</div>
			<div className='test-content'>
				<div className='prev-question' onClick={toPrev}></div>
				<div className='test-card'>
					<h3 className='card-qwestion'>{questionsList[currentQuestion].questions[0].questionText}</h3>
					<ul className='questionsList'>
						{questionsList[currentQuestion].questions[0].options
						.filter(() => questionsList[currentQuestion].questions[0].writeOptionInex.length===1)
						.map((answer, index) => {
							return (
								<li key={index} className='answer'>
									<input type="radio" id={index} name='radio' onChange={setCurrentAnswer} className='radio' />
									<label htmlFor={index} className="input">{answer}</label>
								</li>
							)
						})}
						{questionsList[currentQuestion].questions[0].options
						.filter(() => questionsList[currentQuestion].questions[0].writeOptionInex.length>1)
						.map((answer, index) => {
							return (
								<li key={index} className='answer'>
								<input type="checkbox" id={index} onChange={(e) => handleChecked(e, index)}/>
								<label htmlFor={index} className="input">{answer}</label>
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