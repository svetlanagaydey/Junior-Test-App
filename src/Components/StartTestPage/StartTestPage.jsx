import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './StartTestPage.css';
import start from '../../Assets/Images/start.png'


const StartTestPage = () => {

    return (
        <div className="container">
             <header className='header'>
                <Link to="/" className='toMain'>To Main</Link>
                <ul className="header_rigth-nav">
                    <Link to="/hystory"> To Hystory</Link>
                    <Link to="/users-questions" className="header_rigth-item"> To Questions</Link>
                </ul>
            </header>
            <main className="main-start">
                <h2>You choose topic {localStorage.getItem('topic')}</h2>

                <Link to="/topic1" className="start-button globalBut">
                    START NOW
                </Link>
                <img src={start} alt=""/>
            </main>
        </div>
       
    )
}
export default StartTestPage;