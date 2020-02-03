import React, { Component } from 'react'
import './App.css';
import Completed from "./components/Completed"
import Pending from "./components/Pending"




export class App extends Component {

constructor(props){
  super(props) 
    this.state = {
      toDo: "",
      toDoList: []
    }
  }

  handleChange = (e) => {
    this.setState({
        toDo: e.target.value,
        
        
    })
}

addToDo = () => {
  
  this.setState({
    toDoList: this.state.toDoList.concat(this.state.toDo)
  })
   

}

  render() {
    return (
      <div> 
       
      <input onChange={this.handleChange}id="toDoTextBox" type="textbox" placeholder="Add To Do"/>
      <button onClick={this.addToDo}>Add</button>
      
      <Pending toDo={this.state.toDoList}/>
      <Completed />
      
      </div>
    )
  }
}

export default App


