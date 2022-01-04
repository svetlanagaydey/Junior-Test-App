import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StartPage from './Components/StartPage/StartPage';
import TestComponent from './Components/TestComponent/TestComponent';
import Hystory from './Components/Hystory/Hystory';
import ResultComponent from './Components/ResultComponent/ResultComponent';
import AddQuestionPage from './Components/AddQuestionPage/AddQuestionPage';
class App extends React.Component {
  render () {
    return (

      <BrowserRouter >
      <div>
        <Route path="/" exact component={StartPage}/>
        <Route path="/topic1" component={TestComponent}/>
        <Route path="/hystory" component={Hystory} />
        <Route path="/result" component={ResultComponent} />
        <Route path="/users-questions" component={AddQuestionPage} />
      </div>
      
    </BrowserRouter>
  );
    }
}

export default App;
