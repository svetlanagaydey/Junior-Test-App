import React, { useEffect, useState } from 'react';
import './TestComponent.css';
import TestsList from './TestList';

const TestComponent = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [checked, setChecked] = useState([]);
	const [totalAnswer, setTotalAnswer] = useState([]);

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
			currentQuestion: TestsList[currentQuestion].questions[0].questionText,
			currentAnswer: checked,
			writeAnswer: TestsList[currentQuestion].questions[0].writeOptionInex,
		}]);
  }
	

	function toNext()  {
			if (currentQuestion < TestsList.length-1) {
				const temp = [...totalAnswer];
				temp.push(answers);
				setTotalAnswer(temp);
				setCurrentQuestion(currentQuestion + 1);
			}
			if ((currentQuestion === TestsList.length-1)&&(totalAnswer.length!==TestsList.length)) {
				const temp = [...totalAnswer];
				temp.push(answers);
				setTotalAnswer(temp);
				// console.log('The end!')
			} 

	}
	const setCurrentAnswer = (e) => {
		setAnswers([{
			currentQuestion: TestsList[currentQuestion].questions[0].questionText,
			currentAnswer: [...e.target.id],
			writeAnswer: [TestsList[currentQuestion].questions[0].writeOptionInex.join(', ')],
		//	isWrite: e.target.id==TestsList[currentQuestion].questions[0].writeOptionInex,
		}]);
	}


	useEffect(() => {	
		console.log(answers);
	}, [answers]);
	useEffect(() => {	
		if (totalAnswer.length===TestsList.length) console.log(totalAnswer);
	}, [totalAnswer]);

	return (
		<div className='test-page'>
			<h2>React Test</h2>
			<div className='test-content'>
				<div className='test-progress'>
						<span>Progress</span>
						<span>{currentQuestion+1} from {TestsList.length}</span>
				</div>
				
				<div className='test-card'>
					<h3>{TestsList[currentQuestion].testName}</h3>
					<h4>{TestsList[currentQuestion].questions[0].questionText}</h4>
					<ul className='questionsList'>
						{TestsList[currentQuestion].questions[0].options
						.filter(() => TestsList[currentQuestion].questions[0].writeOptionInex.length===1)
						.map((answer, index) => {
							return (
								<li key={index} className='answer'>
									<input type="radio" id={index} name='radio' onChange={setCurrentAnswer} />
									<label htmlFor={index}>{answer}</label>
								</li>
							)
						})}
						{TestsList[currentQuestion].questions[0].options
						.filter(() => TestsList[currentQuestion].questions[0].writeOptionInex.length>1)
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

				<div className='test-timer'>
						<span>Timer:</span>
						<span>$ : $</span>
				</div>
				<div className='next-question' onClick={toNext}>
						<span>Next</span>
				</div>
			</div>
		</div>
	)
}
export default TestComponent;