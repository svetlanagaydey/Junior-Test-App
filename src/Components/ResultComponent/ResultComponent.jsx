import React from 'react';
import { useLocation } from "react-router-dom";
import TestsList from '../TestComponent/TestList';

const ResultComponent = () => {
    const location = useLocation();
    const result = location.state;
   
    console.log(result.totalAnswer)
    return(
        <div>
            <h2>Your result</h2>
            <div>
                {result.totalAnswer.map((el, index) => {
                   return(
                        <div key={index}>
                        <h3>Question №{index+1}</h3>
                        <div>{el[0].currentQuestion}</div>
                        <h4>Write answer:</h4>
                        <div>{el[0].writeAnswer}</div>
                        <h4>Your answer:</h4>
                        <div>{el[0].currentAnswer}</div>
                       </div>
                      
                   ) 
                })}
            </div>
        </div>
        
    )
}
export default ResultComponent;