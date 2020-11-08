import './styles.css'
import React from "react";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";


class TaskList extends React.Component {
    state = {
        taskList: [],
        isShown: false,
    }

    addTask = task => {
        const tasksUpdated = [...this.state.taskList, task]
        this.setState({
            taskList: tasksUpdated
        })
    }

    completeTask = id => {
        this.setState({
            taskList: this.state.taskList.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        isCompleted: !task.isCompleted,
                    }
                } else {
                    return task
                }
            }),
        })
    }

    render() {
        return (
            <div className="taskList">
                <div className="addListDiv">
                    <h1 className="h1">Add the task</h1>
                    <div>
                        <TaskAdd onSubmit={this.addTask}/>
                    </div>
                </div>

                <h1 className="h2">Current tasks are:</h1>
                <div className="listDiv">
                    <div className="tasks">
                        {this.state.taskList.map(task => (
                            <Task
                                task={task}
                                completeTask={this.completeTask}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )

    }
}

export default TaskList