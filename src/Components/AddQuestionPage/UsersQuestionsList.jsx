import React, {Component} from 'react';

class UsersQuestionsList extends Component {
    state={
        isEdit: false,
    }

    renderQuestionsList = () => {
        return(
            <div>
                <span>{this.props.question}</span>
                <button onClick={()=>this.toggleMode()}>Edit</button>
                <button onClick={()=>this.props.deleteQuestion(this.props.index)}>Delete</button>
            </div>
        )
    }
    renderEdit = () => {
        return(
            <form>
                <input type='text'></input>
                <button type='submit'>Update</button>
            </form>
        )
    }
    toggleMode = () => {
        let isEditMode = this.state.isEdit;
        this.setState({
            isEdit: !isEditMode,
        })
    }
    
    render() {
        return (
           <div>
                {this.state.isEdit ? this.renderEdit() : this.renderQuestionsList()}
           </div>

           
            
        )
    }
}
export default UsersQuestionsList