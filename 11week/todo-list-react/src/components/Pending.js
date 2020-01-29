import React, { Component } from 'react'

export class Pending extends Component {
    render() {
        let toDoItem = this.props.toDo.map(item => <div><li>{item}<input type="checkbox"/></li> </div>)

        return (
            

            <div>
                
                <h1>Pending Items</h1>
                <ul>
                    {toDoItem}
                </ul>

            </div>
        )
    }
}

export default Pending
