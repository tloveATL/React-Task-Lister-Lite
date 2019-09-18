import React, { Component } from 'react'

export class TaskForm extends Component {
    state = {

        task: ''
    }


    handleInput = (e) => {
        e.persist()
        if(e.target.name === "task") {
            this.setState({
                task: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.addTask(this.state.task)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            Task Description:
                <input type='text' name="task" placeholder="Description"  
                onChange={this.handleInput} />
                <input type="submit" value="Create New Task" />
            </form>
        )
    }
}

export default TaskForm
