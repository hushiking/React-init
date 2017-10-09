import React from 'react'
import PropTypes from 'prop-types'

class TodoList extends React.Component {
    static propTypes = {
        items: PropTypes.any
    }
    render() {
        let createItem = (item) => {
            return <li key={item.id}>{item.text}</li>
        }
        return <ul>{this.props.items.map(createItem)}</ul>
    }
}
export default class Combine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: ''
        }
    }
    change = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        let nextItems = this.state.items.concat([{ text: this.state.text, id: Date.now() }])
        let nextText = ''
        this.setState({ items: nextItems, text: nextText })
    }
    render() {
        return (
            <div>
                <h3>ToDo</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.change} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        )
    }
}
