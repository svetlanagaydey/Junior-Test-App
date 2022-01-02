import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import StartPage from './Components/StartPage/StartPage';
import TestComponent from './Components/TestComponent/TestComponent';

ReactDOM.render( (
  <BrowserRouter >
    <div>
      <Route path="/" exact component={StartPage}/>
      <Route path="/topic1" component={TestComponent}/>
    </div>
    
  </BrowserRouter>
), 
  document.getElementById('root')
);
