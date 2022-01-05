import React from 'react';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
//import TestsList from '../TestComponent/TestList';
import './ResultComponent.css';
import TestsList from '../TestComponent/TestList';

const ResultComponent = () => {
	const location = useLocation();
	const result = location.state;
	const currentTopic = localStorage.getItem('topic');
	let index = TestsList.findIndex(el => el.name === currentTopic);
	const questionsList = TestsList[index].list;
	// const totalShow = localStorage.getItem('total');
	// console.log(JSON.parse(totalShow), "+++");

	console.log(result.totalAnswer)
	// const writeText = () => {
	// 	const temp = result.totalAnswer.map((ans, ind) => {
	// 		//console.log(questionsList[index].questions[0].options[Number(ans[0].writeAnswer[0].joing(''))])			
			
	// 		const writeIndex = ans[0].writeAnswer[0].join('');
	// 		const currentIndex = ans[0].currentAnswer[0];
	// 		const answersArray = questionsList[ind].questions[0].options;
	// 		// console.log(writeIndex);
	// 		// console.log(currentIndex);
	// 		// console.log(answersArray);

	// 		// console.log(answersArray[writeIndex]);
	// 		// console.log(answersArray[currentIndex]);

	// 		if(questionsList[ind].questions[0].writeAnswer.length >1) console.log("checkbox")
	// 	})
	// }
	// writeText();

	function total(arr) {
		let count = 0;
		for (let i=0; i < arr.length; i++) {
			if (arr[i][0].currentAnswer.sort().toString()===arr[i][0].writeAnswer.toString()) {
				count++;
			}
		}
		return count
	}

	// console.log("=1= " + result.totalAnswer[0][0].currentQuestion);
	// console.log("=1= " + result.totalAnswer[0][0].currentAnswer);
	// console.log("=1= " + result.totalAnswer[0][0].writeAnswer);
	// console.log(result.totalAnswer[0][0].currentAnswer.toString() === result.totalAnswer[0][0].writeAnswer.toString())

	return(
		<div className='container'>
				<header className='header'>
					<Link to="/" className='toMain'>To Main</Link>
					<ul className="header_rigth-nav">
						<Link to="/hystory"> To Hystory</Link>
						<Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
					</ul>
				</header>
			<h2>Your result <span className="resultScore">{total(result.totalAnswer)}/{result.totalAnswer.length}</span></h2>
			<div>
				{result.totalAnswer.map((ans, index) => {
					const writeIndex = ans[0].writeAnswer[0];
					const currentIndex = ans[0].currentAnswer[0];
					const answersArray = questionsList[index].questions[0].options;
					// console.log(answersArray[writeIndex]);
					// console.log(answersArray[currentIndex]);
					return(
						<div key={index}>
							<h3 className="result-question">{index+1}. {ans[0].currentQuestion}</h3>
							<div className="write-answer">
								<h4>Write answer: </h4><span>{answersArray[writeIndex]}</span>
							</div>
							<div>
								<h4 className="user-answer" >Your answer: </h4><span>{answersArray[currentIndex]}</span>
							</div>
							
						</div>
					) 
				})}
			</div>
		</div>   
	)
}
export default ResultComponent;