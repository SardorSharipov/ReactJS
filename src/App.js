import './App.css';
import './styles.css'
import React from "react";

const Task = ({data: dataI, handleClick}) => (

    <div class="data">
        <div>Id: {dataI.id}</div>
        <div> Name of task: {dataI.name}</div>
        <div>Description: {dataI.description}</div>
        <button onClick={() => {
            dataI.isCompleted = !dataI.isCompleted;
            handleClick();
            console.log("Task %i completed status = %s", dataI.id, dataI.isCompleted);
        }
        }>
            {dataI.isCompleted ? "Completed" : "Uncompleted"}
        </button>
    </div>
)

class App extends React.Component {
    state = {
        data: [{id: 1, name: "HW1", description: "create the following pattern ", isCompleted: false},
            {id: 2, name: "HW2", description: "set up node.js", isCompleted: false},
            {id: 3, name: "HW3", description: "mapping", isCompleted: false},
            {id: 4, name: "HW4", description: "setting up button", isCompleted: true},
            {id: 5, name: "HW5", description: "something to do", isCompleted: true},
            {id: 6, name: "HW6", description: "何かをするには (\"something to do\" in japanese)", isCompleted: true},
            {id: 7, name: "HW7", description: "asd asd asd", isCompleted: true},]
    }

    handleClick = () => {
        this.setState(currentState => ({
            data: currentState.data
        }))
    }
    render() {
        return (
            <div>
                {this.state.data.map(it => <Task data={it} handleClick={this.handleClick}/>)}
            </div>
        )
    }
}

export default App;
