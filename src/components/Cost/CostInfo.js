import './CostInfo.css'
import Card from '../UI/Card';
import CostsFilter from './CostFilter';
import React,{useState} from 'react';
import CostList from './CostList';
import CostDiagram from './CostDiagram';

function CostInfo(props){

    const [year, setYear] = useState("2021")

    const yearChangeHandler = (year) => {
       setYear(year)
    }
    
    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === year;
    })

  


return(
    <div>
    <Card className='costs'> 
    <CostsFilter year={year} onChangeYear ={yearChangeHandler}/>
    <CostDiagram costs ={filteredCosts}/>
    <CostList costs ={filteredCosts}/>
    </Card>
    </div>
)
}

export default CostInfo;