import React, { Component } from 'react'

export class List extends Component {


    render() {
        return (
            <div>
            <h3>
                My Todos
                <ul>
            {this.props.tasks.map(task => {
                return <li>
                    {task} <button onClick={this.props.deleteTasks}>
                        delete
                    </button>
                </li>
            })}
                </ul>
            </h3> 
            </div>
        )
    }
}

export default List
