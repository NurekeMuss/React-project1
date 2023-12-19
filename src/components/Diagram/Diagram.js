import "./Diagram.css"
import DiagramBar from "./DiagramBar";

const Diagram =(props) =>{

    const dataSetsValues = props.dataSets.map
    (dataset => dataset.value)

    const maxMontCosts = Math.max(...
    dataSetsValues)

    return <div className="diagram">
        {props.dataSets.map(dataSets =>  (
        <DiagramBar 
        key={dataSets.label}
        value = {dataSets.value} 
        maxValue = {maxMontCosts} 
        label = {dataSets.label}
        />))}
    </div> 
}
export default Diagram;