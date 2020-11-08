import './styles.css'
import React from "react";

const CreateForm = ({task, inputChange}) => (
    <div className="addDiv">
        <div className="idDiv">Id: {task.id}</div>
        <input
            name={"name"}
            value={task.name}
            onChange={inputChange}
            placeholder={'type the name of task'}
        />
        <input
            name={"description"}
            value={task.description}
            onChange={inputChange}
            placeholder={'type the description of task'}
        />
    </div>
)

class TaskAdd extends React.Component {

    state = {
        id : 1,
        name: '',
        description: '',
        isCompleted: false,
    }

    handleInputChange = event => {
        const {value} = event.target
        this.setState({[event.target.name]: value})
    }

    handleCreate = event =>{
        event.preventDefault();
        if (this.state.name === "") {
            console.log("Name of the task is empty. Fill it!")
            return null;
        }
        this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            id: this.state.id,
            isCompleted: this.state.isCompleted
        })
        this.setState(previous=>({
            id: previous.id + 1,
            name: '',
            description: '',
            isCompleted: false,
        }))
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <CreateForm task={this.state}
                        inputChange={this.handleInputChange}/>
                <button className="addBtn" onClick={this.handleCreate}>Create</button>
            </form>

        )
    }
}

export default  TaskAdd
