import React from 'react'
import PropTypes from 'prop-types'

export default class CheckProps extends React.Component {
  // 初始化props属性值
  static defaultProps = {
    paly: false,
    loop: '对不对'
  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  static propTypes = {
    play: PropTypes.bool.isRequired,
    loop: PropTypes.string
  }
  render() {
    return (
      <div>
        属性校验{this.props.loop}
      </div>
    )
  }
}
