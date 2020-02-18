import React, { Component } from 'react'
import './App.css';
import Form from './components/Form'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items: [
         {name: "Lait", quantity:"2 Litres"},
         {name: "Pain", quantity:"2 Kilos"}
       ]
    }
  }

  addItem = (item) => {
    this.setState(prevState => ({
      items :  [...prevState.items, item]
    }))
  } 

  renderItems = () => {
    return (
      <ul>
        {this.state.items.map(item => 
          <li key={item.name}>{item.name} : {item.quantity} </li>

        )}
      </ul>
    )
  }
  
  render() {
    return (
      <div>
          {this.renderItems()}
          <Form addItem={this.addItem}/>
      </div>
    )
  }
}


