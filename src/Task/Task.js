import './styles.css'
import React from "react";

class Task extends React.Component {

    render() {
        return (
            <div className="data">
                <div className="info"> Id: {this.props.task.id}</div>
                <div className="info"> Name of task: {this.props.task.name}</div>
                <div className="info">Description: {this.props.task.description}</div>
                <button onClick={() => {
                    this.props.completeTask(this.props.task.id);
                }}>
                    {this.props.task.isCompleted ? "Completed" : "Uncompleted"}
                </button>
            </div>
        )
    }

}

export default Task