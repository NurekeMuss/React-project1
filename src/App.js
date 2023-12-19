import React,{useState} from "react";
import CostInfo from "./components/Cost/CostInfo";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id:"c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount:999.99
  },
  {
    id:"c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount:1621.99
  },
  {
    id:"c3",
    date: new Date(2021, 4, 12),
    description: "Джинсы",
    amount:49.99
  },
]

function App() {

  const [costs,setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });/* Обновление состояние когда мы основоемся на пред состание */
  }


  return (
    <div className="App">
    <NewCost onAddCost = {addCostHandler}/> {/* input form */}
    <CostInfo costs = {costs}/> {/* card form */}
      </div>
  );
}

export default App;
