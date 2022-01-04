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
						<Link to="/hystory"> To Hystory</Link>
						<Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
					</ul>
					
				</header>
				<main className="main-container">
					<ul className="topics-list">
						<li className="topic-item" ><Link to="/test-start" onClick={setLocalTopic} value='HTML'>HTML</Link></li>
						<li className="topic-item"><Link to="/topic2">Topic2</Link></li>
						<li className="topic-item"><Link to="/topic3">Topic3</Link></li>
						<li className="topic-item"><Link to="/topic4">Topic4</Link></li>
					</ul>
					<div className="main-content">
						<h1>Test your knowledge <br />
							Press topic to start test
						</h1>
						<div className="main_img-link">
							<img src={mainImg}  className="main_img" alt=""/>	
							<Link to="/users-questions" className="add-question_link">
								<div className="addQuestion">
									<p>Questions from the users!</p>
									<div className='question-icon'>?</div>
								</div>
							</Link>
						</div>
						
						
					</div>
				</main>	
		</div>
	)
}
export default StartPage;