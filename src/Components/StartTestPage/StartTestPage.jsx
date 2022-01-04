import React from 'react';
import {Link} from 'react-router-dom';
//import './StartPage.css';


const StartTestPage = () => {
    return (
        <div>
             <header className='header'>
                <Link to="/" className='toMain'>To Main</Link>
                <ul className="header_rigth-nav">
                    <Link to="/hystory"> To Hystory</Link>
                    <Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
                </ul>
            </header>
            <main className="main-container">
                <Link to="/topic1"> START NOW</Link>
            </main>
        </div>
       
    )
}
export default StartTestPage;