import React, { Component } from 'react'

export class Pending extends Component {

   

    handleDelete = (itemToDelete) => {

        this.setState = {
            toDoList: (this.props.toDo.filter((item) => item !== itemToDelete)
             
            ) 
        }
    }


    render() {
        let toDoItem = this.props.toDo
        let toDoDisplay = toDoItem.map(item => <div><li><button onClick={() => this.handleDelete(item)}>X</button>{item}</li></div>)
        return (
            

            <div>
                
                <h1>Pending Items</h1>
                <ul>
                    {toDoDisplay}
                </ul>

            </div>
        )
    }
}

export default Pending
