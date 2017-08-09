import React from 'react'

export default class ControlForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }
  handleChange(e) {
    console.log(this.textInput.value)
    let inputStr = ''
    if (e.target.value.length >= 8) {
      inputStr = e.target.value.slice(0, 5) + '...'
    } else {
      inputStr = e.target.value
    }
    this.setState({
      userInput: inputStr
    })
  }
  clearAndFocusInput() {
    this.setState({userInput: ''}, () => this.textInput.focus())
  }
  render() {
    return (
      <div>
        <div onClick = {this.clearAndFocusInput.bind(this)}>
          Click to Focus and Reset
        </div>
        {/* 受控表单组件改变输入框值 */}
        <input type="text" ref={(input) => (this.textInput = input)} value={this.state.userInput} onChange={this.handleChange.bind(this)}/>
        <br/>
        {/* 受控表单组件写死value值, 永远不会改变 */}
        {/* 报错, 受控表单不能设置value属性, 必须用onChange事件改变value */}
        <input type="text" ref={(input) => (this.textInput1 = input)} value="hello" onChange={this.handleChange.bind(this)}/>
        <br/>
        {/* 只要写死value值就是受控表单 */}
        <input type="text" value="hello"/>
        <br/>
        {/* 非受控表单组件里面输入框值改变不受react控制 */}
        <input type="text" ref={(input) => (this.textInput2 = input)}/>
        <br/>
        {/* 普通表单 */}
        <input type="text"/>
      </div>
    )
  }
}
