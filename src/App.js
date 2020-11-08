import './App.css';
import './styles.css';
import React from "react";
import TaskList from "./TaskList/TaskList";

class App extends React.Component {
    render() {
        return (
            <TaskList/>
        )
    }
}

export default App