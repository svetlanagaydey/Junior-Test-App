import React from 'react';
import { useLocation } from "react-router-dom";
//import TestsList from '../TestComponent/TestList';

const ResultComponent = () => {
	const location = useLocation();
	const result = location.state;

	function total(arr) {
		let count = 0;
		for (let i=0; i < arr.length; i++) {
			if (arr[i][0].currentAnswer.toString()===arr[i][0].writeAnswer.toString()) {
				console.log('+')
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
		<div>
			<h2>Your result</h2>
			<div>
				{result.totalAnswer.map((el, index) => {
					return(
						<div key={index}>
							<h3>Question №{index+1}</h3>
							<div>{el[0].currentQuestion}</div>
							<h4>Write answer:</h4>
							<div>{el[0].writeAnswer}</div>
							<h4>Your answer:</h4>
							<div>{el[0].currentAnswer}</div>
						</div>
					) 
				})}
			</div>
			<h4>Total Score: {total(result.totalAnswer)}/{result.totalAnswer.length}</h4>
		</div>   
	)
}
export default ResultComponent;