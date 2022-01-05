import React from 'react';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
//import TestsList from '../TestComponent/TestList';
import './ResultComponent.css';

const ResultComponent = () => {
	const location = useLocation();
	const result = location.state;
	const totalShow = localStorage.getItem('total');
	console.log(JSON.parse(totalShow), "+++");


	function total(arr) {
		let count = 0;
		for (let i=0; i < arr.length; i++) {
			if (arr[i][0].currentAnswer.toString()===arr[i][0].writeAnswer.toString()) {
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
				{result.totalAnswer.map((el, index) => {
					return(
						<div key={index}>
							<h3 className="result-question">{index+1}. {el[0].currentQuestion}</h3>
							<div className="write-answer">
								<h4>Write answer:</h4>
								<span>{el[0].writeAnswer}</span>
							</div>
							<div>
							<h4 className="user-answer" >Your answer:</h4>
							<span>{el[0].currentAnswer}</span>
							</div>
							
						</div>
					) 
				})}
			</div>
		</div>   
	)
}
export default ResultComponent;