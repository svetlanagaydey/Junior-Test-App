import React, { useState } from 'react';
import './TestComponent.css';

const testsList = [
	{
		testName: 'Test Name',
		testId: 123,
		questions: [
			{
				questionId: 1000,
				questionText: 'What is the Capital of Great Britain',
				options: ['London', 'Paris', 'Kyiv', 'Berlin'],
				writeOptionInex: [0],
			}
		]
	},
	{
		testName: 'Test Name',
		testId: 124,
		questions: [
			{
				questionId: 1001,
				questionText: 'Сhoose the second and fourth option',
				options: ['First', 'Second', 'Third', 'Fourth'],
				writeOptionInex: [1, 3],
			}
		]
	}, 
	{
		testName: 'Test Name',
		testId: 125,
		questions: [
			{
				questionId: 1002,
				questionText: 'What is no food in the list?',
				options: ['Tomato', 'Fish', 'Coca-Cola', 'Cucumber'],
				writeOptionInex: [2],
			}
		]
	},
]

const TestComponent = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const toNext = () => {
		setCurrentQuestion(currentQuestion + 1);
	}

	return (
		<div className='test-page'>
			<h2>React Test</h2>
			<div className='test-content'>
				<div className='test-progress'>
						<span>Progress</span>
						<span>$ from $</span>
				</div>
				
				<div className='test-card'>
					<h3>{testsList[currentQuestion].testName}</h3>
					{testsList[currentQuestion].questions.map((quest) => {
						return (
							<div key={quest.questionId}>
								<h4>{quest.questionText}</h4>
								<ul className='questionsList'>
									{quest.options.map((answer, index) => {
										
										if (quest.writeOptionInex.length===1) {
											return (
												<li key={index} className='answer'>
													<input type="radio" id={index} name='radio'/>
													<label htmlFor={index}>{answer}</label>
												</li>
											)
										} else if (quest.writeOptionInex.length>1) {
											return (
												<li key={index} className='answer'>
													<input type="checkbox" id={index}/>
													<label htmlFor={index}>{answer}</label>
												</li>
											)
										}
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