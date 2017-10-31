import React from 'react'

export default class ControlForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ''
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    // 如果未传其他参数(或者箭头函数只传了一个形参, 则第一个参数 data 代表鼠标事件; 否则按照实参传递顺序判断鼠标事件
    handleChange(data, e) {
        console.log(data)
        console.log(this)
        console.log(this.textInput.value) // Dom方式取input输入框的值
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
    // 自定义函数是普通函数，调用时要么使用.bind(this)绑定，要么使用箭头函数调用
    handleDefault() {
        console.log(this)
        this.textInput1.value = 'default'
    }
    // 普通函数，未绑定this，调用时报错，内部this为null
    handleBind(e) {
        console.log(e.target.value)
        console.log(this)
        this.textInput2.value = 'bind'
    }
    // 自定义函数是箭头函数，调用时可以不使用.bind(this)，直接调用
    clearAndFocusInput = () => {
        this.setState({ userInput: '' }, () => this.textInput.focus())
    }
    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput}>
                    Click to Focus and Reset
        </div>
                {/* 受控表单组件改变输入框值，如果handleChange不是箭头函数，必须要是用.bind(this)指定this指向 */}
                <input type="text" ref={(input) => (this.textInput = input)} value={this.state.userInput} onChange={(x) => this.handleChange('data', x)} />
                <br />
                {/* 受控表单组件写死value值, 永远不会改变 */}
                {/* 报错, 受控表单不能设置value属性, 必须用onChange事件改变value */}
                <input type="text" ref={(input) => (this.textInput1 = input)} defaultValue="hello" onClick={() => this.handleDefault()} />
                <br />
                {/* 只要写死value值就是受控表单, React表单组件不能设置value值，如果必须要设置，可以用defaultValue */}
                <input type="text" value="hello" />
                <br />
                {/* 非受控表单组件里面输入框值改变不受react控制 */}
                <input type="text" ref={(input) => (this.textInput2 = input)} onClick={this.handleBind} />
                <br />
                {/* 普通表单 */}
                <input type="text" />
            </div>
        )
    }
}
