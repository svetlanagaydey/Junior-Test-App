import React from 'react';
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
				writeOptionInex: 0,
			}
		]
	}
]

const TestComponent = () => {
    return (
        <div className='test-page'>
            <h2>React Test</h2>
            <div className='test-content'>
                <div className='test-progress'>
                    <span>Progress</span>
                    <span>$ from $</span>
                </div>
                
                <div className='test-card'>
									<h3>{testsList.testName}</h3>
									{testsList[0].questions.map((quest) => {
										return (
											<div key={quest.questionId}>
												<h4>{quest.questionText}</h4>
												<ul className='questionsList'>
													{quest.options.map((answer, index) => {
														return (
														<li key={index} className='answer'>{answer}</li>
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
            </div>
        </div>
    )
}
export default TestComponent;