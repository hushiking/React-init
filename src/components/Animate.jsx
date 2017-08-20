import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './animate.css'

export default class Animate extends Component {
  constructor(props) {
    super(props)
    this.state = {items: ['hello', 'world', 'click', 'me']}
    // 绑定this
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd() {
    // 构建器中已经绑定this了
    const newItems = this.state.items.concat([prompt('Enter some text')])
    this.setState({items: newItems})
  }
  handleRemove(i) {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({items: newItems})
  }
  render() {
    /* 此处箭头函数函数体只有一行, 可以省略return关键字, 必要时候可使用小括号包裹函数体, 使用大括号包裹函数体会报错 */
    const items = this.state.items.map((item, i) => <div key = {item} onClick = {() => this.handleRemove(i)}>
      {item}
    </div>
    )
    return (
      <div>
        <button onClick = {this.handleAdd}> Add Item1 </button>
        <ReactCSSTransitionGroup
          component = 'div'
          transitionName = 'example'
          transitionAppear = {true}
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {300}
          transitionAppearTimeout = {500}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
