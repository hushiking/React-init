import React from 'react'

export default class Life extends React.Component {
    constructor(props) {
        super(props)
        console.log('此处是构建函数')
        this.state = {
            props: '初始化state'
        }
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }
    click1 = () => {
        console.log('触发单击事件')
        this.setState({
            props: '改变了state值'
        })
        console.log('单击事件结束')
    }
    render() {
        console.log('渲染dom节点')
        return (
            <div>
                <p>不是我</p>
                <h1 onClick={this.click1}>{this.state.props}</h1>
            </div>
        )
    }
}
