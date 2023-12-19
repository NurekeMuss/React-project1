import CostForm from "./CostForm";
import "./NewCost.css";
import React,{useState} from 'react';



const NewCost = (props) => {
    
    const [isFormVisible, setIsFormVisible]=useState(false)

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData); 
        setIsFormVisible(false)
    }

    const inputCostDataHandler =() =>{
        setIsFormVisible(true)
    }

    const cancelCostDataHandler =()=>{
        setIsFormVisible(false)
    }

    return (
    <div className="new-cost">
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
        {isFormVisible && <CostForm onSaveCostData = {saveCostDataHandler} onCancel = {cancelCostDataHandler}/>}
    </div>
    )
}

export default NewCost;