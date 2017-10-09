import React from 'react'

export default class ListenEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }
    handleClick(e, a, b, c) {
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(e)
        this.setState({
            liked: !this.state.liked
        })
    }
    handleMouseOver = (str) => {
        console.log(str)
    }
    render() {
        const text = this.state.liked ? 'like' : 'don\'t like'
        return (
            <p 
                onClick={this.handleClick.bind(this, 33, 'hello')}
                onMouseOver={this.handleMouseOver.bind(this, '六神花露水')}>
                You {text} this.click to toggle
            </p>
        )
    }
}
