import React from 'react';
import {Link} from 'react-router-dom';
import './StartPage.css';
import mainImg from '../../Assets/Images/mainImg.png'

const StartPage = () => {
	const setLocalTopic = (e) => {
		console.log(e.target.text)
		localStorage.setItem('topic' , e.target.text);
	}
	return (
			<div className='container'>
				<header className='header'>
					<Link to="/" className='toMain'>To Main</Link>
					<ul className="header_rigth-nav">
						<li>
							<Link to="/hystory"> To Hystory</Link>
						</li>
						<li>
							<Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
						</li>
					</ul>
				</header>
				<main className="main-container">
					<ul className="topics-list">
						<li className="topic-item" ><Link to="/test-start" onClick={setLocalTopic} value='HTML' data-hover="HTML">HTML</Link></li>
						<li className="topic-item"><Link to="/test-start" onClick={setLocalTopic} value='CSS' data-hover="CSS">CSS</Link></li>
						<li className="topic-item"><Link to="/topic3" onClick={setLocalTopic} value='JavaScript' data-hover="JavaScript">JavaScript</Link></li>
						<li className="topic-item"><Link to="/topic4" onClick={setLocalTopic} value='REACT' data-hover="REACT">REACT</Link></li>
					</ul>
					<div className="main-content">
						<h1>Test your knowledge <br />
							Press topic to start test
						</h1>
					
						<img src={mainImg}  className="main_img" alt=""/>	
						<Link to="/users-questions" className="add-question_link">
							<div className="addQuestion globalBut">
								<p>Submit your questions here!</p>
								<div className='question-icon'>?</div>
							</div>
						</Link>
						
						
						
					</div>
				</main>	
		</div>
	)
}
export default StartPage;