import React from 'react'

let num = 0;

export default class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
    }
    componentDidMount() {
        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val);
        this.setState({ val: this.state.val + 2 });
        console.log(this.state.val);
        this.setState({ val: this.state.val + 2 });
        console.log(this.state.val);
        setTimeout(() => {
            this.setState({ val: this.state.val + 3 });
            console.log(this.state.val);
            this.setState({ val: this.state.val }); // val 值未发生变化，通过 shouldComponentUpdate 设置不重新渲染
            console.log(this.state.val);
            this.setState({ val: this.state.val + 5 });
            console.log(this.state.val);
        }, 0)
        console.log('a', this.state.val);
        this.setState({ val: this.state.val + 2 });
        console.log('b', this.state.val);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.val === this.state.val) {
            // console.log('不渲染');
            return false
        }
        return true
    }
    render() {
        console.error('触发次数：', ++num)
        return null;
    }
}
