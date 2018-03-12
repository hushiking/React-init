import React from 'react'
import ReactDom from 'react-dom'

// import Hello from './components/Hello.jsx'
// import Life from './components/Life.jsx'
// import GainDom from './components/GainDom.jsx'
// import ListenEvent from './components/ListenEvent.jsx'
// import ControlForm from './components/ControlForm.jsx'
// import Combine from './components/Combine.jsx'
// import CheckProps from './components/CheckProps.jsx'
// import Context from './components/Context.jsx'
// import Animate from './components/Animate.jsx'
import Demo from './components/Demo.jsx'

// 性能测试
import Perf from 'react-addons-perf'
if (__DEV__) {
    window.Perf = Perf
}

// 测试webpack.DefinePlugin设置的全局变量是否生效
if (PRODUCTION) {
    console.log('Production log')
}

ReactDom.render(
    <Demo />,
    document.getElementById('app')
)
