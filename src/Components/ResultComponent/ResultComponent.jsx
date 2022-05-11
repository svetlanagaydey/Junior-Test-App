import React from 'react';
import {Link} from 'react-router-dom';
import './ResultComponent.css';
import TestsList from '../TestComponent/TestList';

const ResultComponent = () => {
  
	const timeoutedResult = JSON.parse(localStorage.getItem('totalAnswer')); 

	const result =  timeoutedResult; // in cases timeout and submit

	const currentTopic = localStorage.getItem('topic');
	let index = TestsList.findIndex(el => el.name === currentTopic);
	const questionsList = TestsList[index].list;
  console.log(result);

  if (result.length < questionsList.length) {  // add ampty answers in case ununswered questions 
    console.log("result: " + result.length + ", questions: " + questionsList.length);
    for (let i = result.length; i < questionsList.length; i++) {
      result.push(
        [{
          currentQuestion: questionsList[i].questions[0].questionText,
          currentAnswer: [''],
          writeAnswer: [questionsList[i].questions[0].writeOptionInex],
        }]
      )
    }
  }
	
	function total(arr) {
		let count = 0;
		for (let i=0; i < arr.length; i++) {
			if (arr[i][0].currentAnswer.sort().toString()===arr[i][0].writeAnswer.toString()) {
				count++;
			}
		}
		return count
	}

	return(
		<div className='container result-container'>
				<header className='header'>
					<Link to="/" className='toMain'>To Main</Link>
					<ul className="header_rigth-nav">
						<Link to="/hystory"> To Hystory</Link>
						<Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
					</ul>
				</header>
			<h2>Your result <span className="resultScore">{total(result)}/{result.length}</span></h2>
			<div>
				{result.map((ans, index) => {
					const writeIndexesArray = ans[0].writeAnswer; //an array
					const currentIndexesArray = ans[0].currentAnswer;
					const answersArray = questionsList[index].questions[0].options; // перечень вопросов
					// console.log(writeIndex);
					// console.log(answersArray[currentIndex]);
					return(
						<div key={index}>
							<h3 className="result-question">{index+1}. {ans[0].currentQuestion}</h3>

							<div className="write-answer">
								<h4>Write answer:</h4>
								<div className='write-anwers__list'>
								{writeIndexesArray.map((answer) => {
									return <span key={answer}>{answersArray[answer]}</span>
								})}
								</div>
							</div>

							<div className="user-ans">
								<h4> Your answer:</h4>
								<div className='user-ans__list'>
								{currentIndexesArray.map((answer) => {
									return <span key={answer}>{answersArray[answer]}</span>
								})}
								</div>
							</div>

						</div>
					) 
				})}
			</div>
		</div>   
	)
}
export default ResultComponent;