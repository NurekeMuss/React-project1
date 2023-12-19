import React, { useState } from 'react';

import "./CostForm.css"; 

const CostForm = (props) =>{

    const [inputName,setInputName] = useState(''); 
    const [inputAmount,setInputAmount] = useState(''); 
    const [inputDate,setInputDate] = useState(''); 

/* const [userInput, setUserInput] = useState({
    name: '',
    amoun:'',
    date:' '   
}) */
    const nameChangeHandler = (event) =>{
        /* setUserInput({
            ...userInput,
            name: event.target.value
        }) */
       /*  setUserInput((prevState) =>{
            return {
                ...prevState,
                name: event.target.value
            }
        }) */
        setInputName(event.target.value);
    }
   
  
    const amountChangeHandler = (event) =>{
       /*  setInputUserInput({
            ...userInput,
            amount: event.target.value
        }) */
        setInputAmount(event.target.value)    
    }
  
   

    const dateChangeHandler = (event) =>{
      /*   setInputUserInput({
            ...userInput,
            date: event.target.value
        }) */
        setInputDate(event.target.value);
    }

    const sumbitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount:inputAmount,
            date:new Date(inputDate)
        };
        props.onSaveCostData(costData);
        setInputName("")
        setInputAmount("")
        setInputDate("")

      /*   console.log(costData) */
    };
  
   

    return(
        <form onSubmit={sumbitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
            </div>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" value={inputDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/>
                </div>
                <div>
                    <div className=".new-cost__actions">
                        <button type="sumbit"> Добавить Расход</button>
                        <button type='button' onClick={props.onCancel}>Отмена</button>
                    </div>
                </div>
            </div>
            
           
        </form>
    )
}

export default CostForm;