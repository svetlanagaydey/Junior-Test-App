import React, { useState } from 'react';
import './TestComponent.css';
import TestsList from './TestList';

const TestComponent = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([{}]);
	

	function toNext()  {

		if (currentQuestion >= TestsList.length-1) {
			console.log('The end!')
		} else
			setCurrentQuestion(currentQuestion + 1);
	}
	const setCurrentAnswer = (e) => {
		setAnswers([{
			currentAnswer: e.target.id,
			writeAnswer: TestsList[currentQuestion].questions[0].writeOptionInex,
			isWrite: e.target.id===TestsList[currentQuestion].questions[0].writeOptionInex.toString(),
		}]);	
		// console.log(answers.currentAnswer === answers.writeAnswer)
		// console.log(TestsList[currentQuestion].questions[0].writeOptionInex)
		console.log(answers[0].isWrite);
	}


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
					{TestsList[currentQuestion].questions.map((quest) => {
						return (
							<div key={quest.questionId}>
								<h4>{quest.questionText}</h4>
								<ul className='questionsList'>
									{quest.options.filter(() => quest.writeOptionInex.length===1)
									.map((answer, index) => {
										return (
											<li key={index} className='answer'>
												<input type="radio" id={index} name='radio' onChange={setCurrentAnswer}/>
												<label htmlFor={index}>{answer}</label>
											</li>
										)
									})}
									{quest.options.filter(() => quest.writeOptionInex.length>1)
									.map((answer, index) => {
										return (
											<li key={index} className='answer'>
											<input type="checkbox" id={index}/>
											<label htmlFor={index}>{answer}</label>
											</li>
										)
									})}
								</ul>
							</div>
						)
					})}
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