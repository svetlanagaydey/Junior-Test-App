import React from 'react';
import {Link} from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
	return (
			<div className=''>
				<header className='header'>
					<Link to="/">To Main</Link>
					<Link to="/hystory"> To Hystory</Link>
				</header>
				<main className="main-container">
					<ul>
						<li><Link to="/topic1">Topic1</Link></li>
						{/* <li><Link to="/topic2">Topic2</Link></li>
						<li><Link to="/topic3">Topic3</Link></li>
						<li><Link to="/topic4">Topic4</Link></li> */}
					</ul>
					<div className="main-content">
						<h1>Start Page</h1>
						<div className="addQuestion">
							Add your question here!
						</div>
					</div>
				</main>	
		</div>
	)
}
export default StartPage;