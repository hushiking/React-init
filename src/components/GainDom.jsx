import React from 'react'

export default class GainDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ''
        }
    }
    componentWillMount() { }
    handleChange(e) {
        console.log(this.theInput)
        console.log(this.theInput.value)
        this.setState({ userInput: e.target.value })
    }
    clearAndFocusInput() {
        this.setState({ userInput: '' }, () => {
            this.theInput.focus()
        })
    }
    componentDidMount() {
        console.log(this.theInput)
        console.log(this.theDiv)
    }
    render() {
        return (
            <div ref={div => (this.theDiv = div)}>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to focus and reset
        </div>
                {/* Use the `ref` callback to store a reference to the text input DOM
        element in an instance field (for example, this.textInput). */}
                <input type="text" ref={input => (this.theInput = input)} value={this.state.userInput} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
