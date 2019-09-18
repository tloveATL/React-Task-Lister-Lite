import React, { Component } from 'react'
import TaskForm from './TaskForm';
import List from './List'

export class Main extends Component {
    constructor(props){
        super(props)
            this.state = {
                tasks: []
            }
    }

    addTask = (task) => {

        this.setState({tasks: [
            ...this.state.tasks,
            task
    
        ]})
    } 

    deleteTasks = (e) => {
    e.target.parentNode.remove()
        }
    
    render() {
        return (
            <div>
            <h1>
                React Task Lister Lite    
            </h1> 
            <TaskForm addTask={this.addTask}/>
            <List deleteTasks={this.deleteTasks} tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Main
