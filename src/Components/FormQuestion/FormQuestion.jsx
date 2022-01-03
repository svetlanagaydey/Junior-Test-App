import React from 'react';
const FormQuestion = (props) => {
    return (
        <form onSubmit={props.addQuestion}>
            <input type="text"
                onChange={props.handleChange}
                value={props.curQuest}/>
            <button type="submit">Add question</button>
        </form>
    )
}
export default FormQuestion;