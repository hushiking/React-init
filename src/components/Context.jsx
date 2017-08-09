import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  // 在子孙组件里面通过静态属性校验父组件传过来的属性
  static contextTypes = {
    color: PropTypes.string
  }
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div>
        <h1>{this.context.age}</h1>
        <button style={{backgroundColor: this.context.color}}>
          {this.props.children}
        </button>
      </div>
    )
  }
}
class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string
  }
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  }
}
export default class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // 在父组件中通过静态属性校验传递给子孙组件的属性
  static childContextTypes = {
    color: PropTypes.string,
    age: PropTypes.number
  }
  static propTypes = {
    messages: PropTypes.array
  }
  // 通过这个方法传递属性
  getChildContext() {
    return {
      color: 'pink',
      age: 12
    }
  }
  render() {
    let children = this.props.messages.map(message => {
      return <Message text={message.text} key={message.id}/>
    })
    return (
      <div>
        {console.log(children[0])}
        {children}
      </div>
    )
  }
}
