import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                name: '',
                quantity: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        }
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state)
        this.setState({ name: '',quantity: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Produit : </label>
                    <input name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                    <input name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    <button>Ajouter</button>
                </form>
            </div>
        )
    }
}

export default Form
