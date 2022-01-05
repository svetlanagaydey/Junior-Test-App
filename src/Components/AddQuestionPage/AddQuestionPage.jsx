
import React from 'react';
import './AddQuestionPage.css';
import question from '../../Assets/Images/question.png'

class AddQuestionPage extends React.Component {
	state={
		act: 0,
		index: '',
		datas: []
	}

  componentDidMount(){
    this.refs.question.focus();
  }

  submitQuestion = (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let question = this.refs.question.value;
    let answer = this.refs.answer.value;

    if(this.state.act === 0){   //new
      let data = {
        question, answer
      }
      datas.push(data);
    } else {                      //update
      let index = this.state.index;
      datas[index].question = question;
      datas[index].answer = answer;
    }    

    this.setState({
      datas: datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.question.focus();
  }

  removeQuestion = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.question.focus();
  }

  editQuestion = (i) => {
    let data = this.state.datas[i];
    this.refs.question.value = data.question;
    this.refs.answer.value = data.answer;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.question.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="container">
        
        <form ref="myForm" className="myForm">
          <fieldset>
          <legend>
            <h2 className="form ">Submit you question here!</h2>
          </legend>
          <input type="text" ref="question" placeholder="Your question" className="formField" />
          <input type="text" ref="answer" placeholder="Answer to the question" className="formField" />
          <button onClick={(e)=>this.submitQuestion(e)} className="myButton globalBut">SUBMIT </button>
          </fieldset>
          
        </form>
        <img src={question} className="question-img" alt=""/>
        <div>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              <div>
                <span> {i+1}. {data.question}</span>
                <span>{data.answer}</span>
              </div>
              <button onClick={()=>this.removeQuestion(i)} className="myListButton">DELETE </button>
              <button onClick={()=>this.editQuestion(i)} className="myListButton">EDIT </button>
            </li>
          )}
        </div>
      </div>
    );
  }
}

export default AddQuestionPage;