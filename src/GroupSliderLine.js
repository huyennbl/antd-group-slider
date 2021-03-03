import React from 'react'
import { Input, Slider } from 'antd'
import './styles.css'
const DEFAULT_PLACEHOLDER = 'Description for range {{range}}'
class GroupSliderLine extends React.Component {
  state = {
    right: this.props.value[1],
    left: this.props.value[0]
  }
  onChange = (val) => {
    const [left, right] = val
    const nextRight = left === this.state.left ? right : left
    this.setState({
      right: Math.max(this.state.left, nextRight)
    })
  }
  calculateMarks = (max) => {
    const mid = Math.floor(max / 2)
    return {
      0: '0',
      [mid]: mid.toString(),
      [max]: max.toString()
    }
  }
  renderDescription = () => {
    const { placeholder, descriptionType } = this.props
    const placeholderDesc = placeholder && placeholder.description
    const placeholderSeparator = placeholder && placeholder.separator
    const inputProps = {
      className: 'antd-group-slider-item__description',
      placeholder: this.renderPlaceholderText(
        placeholderDesc,
        placeholderSeparator
      ),
      defaultValue: this.props.initialDescription,
      onChange: (e) => this.props.updateDescription(e.target.value)
    }
    if (descriptionType === 'none') {
      return <React.Fragment />
    }
    if (descriptionType === 'input') {
      return <Input {...inputProps} />
    }
    return <Input.TextArea {...inputProps} />
  }

  renderPlaceholderText = (
    input = DEFAULT_PLACEHOLDER,
    rangeSeparator = '-'
  ) => {
    return input.replace(
      /{{range}}/,
      `${this.state.left}${rangeSeparator}${this.state.right}`
    )
  }

  render() {
    const { left, right } = this.state
    const marks = this.props.marks || this.calculateMarks(this.props.max)

    return (
      <div className='antd-group-slider-item'>
        <Slider
          className='antd-group-slider-item__slider'
          range
          min={0}
          max={this.props.max}
          marks={marks}
          value={[left, right]}
          onChange={this.onChange}
          onAfterChange={(val) => this.props.onAfterRangeChange(val)}
        />
        {this.renderDescription()}
      </div>
    )
  }
}
export default GroupSliderLine
