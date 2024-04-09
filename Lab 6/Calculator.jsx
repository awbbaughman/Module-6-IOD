/*
my error from React localhost: in "Calculator.jsx: Identifier 'a' has already been declared." on line 34
I know I'm missing something but I feel like this is a decent start!
*/

import { useState } from 'react';
import { useUserContext } from 'react';
 
function calculator() {
    const [sum, add] = useState('');
    const [difference, subtract] = useState('');
    const [product, multiply] = useState('');
    const [quotient, divide] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
            if (button.name != ('+', '-', '*', '/')) {
    setSubmitResult('Please use a valid operator');
            }  
        else if (calculator.getElementById("operatorAdd"))
            setSubmitResult(add());
        else if (calculator.getElementById("operatorSubtract"))
            setSubmitResult(subtract());
        else if (calculator.getElementById("operatorMultiply"))
            setSubmitResult(multiply());
        else if (calculator.getElementById("operatorDivide"))
            setSubmitResult(divide()) 
        handleUpdateNumber({});
    
        navigate('/dash')
    
            }

                function add(a,b){
                    let a = calculator.getElementById("numberA");
                    let b = calculator.getElementById("numberB");
                    sum = a + b;
                    return sum;
                }
                
                function subtract(a,b){
                    let a = calculator.getElementById("numberA");
                    let b = calculator.getElementById("numberB");
                    difference = a - b;
                    return difference;
                }  

                function multiply(a,b){
                    let a = calculator.getElementById("numberA");
                    let b = calculator.getElementById("numberB");
                    product = a * b;
                    return product;
                }

                function divide(a,b){
                    let a = calculator.getElementById("numberA");
                    let b = calculator.getElementById("numberB");
                    quotient = a / b;
                    return quotient;
                } 
        
    return (
        <div style="border: solid black 1px">
            <h1>Calculator</h1>
            <h3>Enter Your numbers to calculate! (Use + - * or /)</h3>
                <form>
                    <label for="numberA">Add a Number Here:</label>
                    <input type="text" name="numberA" id="numberA"></input>

                    <input type="radio" id="operatorAdd" name="add">+</input> 
                    <input type="radio" id="operatorSubtract" name="subtract">-</input> 
                    <input type="radio" id="operatorMultiply" name="multiply">*</input> 
                    <input type="radio"id="operatorDivide" name="divide">/</input>

                    <label for="numberB">Add another Number Here:</label>
                    <input type="text" name="numberB" id="numberB"></input>
                    
                    <button id="calculate" onClick={handleSubmit}>Calculate!</button>

                    <label for="result">Result</label>
                    <input type="text" name="result" id="result"></input>
                </form>
                    
                </div>
            
    )
};

export default calculator;