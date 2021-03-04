import React from 'react'
import { Input, Slider } from 'antd'
import { renderRangeInText } from './utils'
import './styles.css'

const DEFAULT_PLACEHOLDER = 'Description for range {{range}}'

const SideTextDescription = ({ leftText, rightText, children }) => {
  return (
    <div className='antd-group-slider-item__description'>
      <div className='antd-group-slider-item__description-left-text'>
        {leftText}
      </div>

      {children}

      <div className='antd-group-slider-item__description-right-text'>
        {rightText}
      </div>
    </div>
  )
}

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
    const descriptionConfig = this.props.descriptionConfig || {}
    const {
      placeholder,
      type,
      separator,
      leftText,
      leftAddonText,
      rightText,
      rightAddonText
    } = descriptionConfig
    if (type === 'none') {
      return <React.Fragment />
    }

    const range = [this.state.left, this.state.right]
    const inputProps = {
      className: 'antd-group-slider-item__description',
      placeholder: placeholder
        ? renderRangeInText(range, placeholder, separator)
        : renderRangeInText(range, DEFAULT_PLACEHOLDER, separator),
      defaultValue: this.props.initialDescription,
      onChange: (e) => this.props.updateDescription(e.target.value)
    }

    if (type === 'input') {
      const inputPropsWithAddon = Object.assign({}, inputProps, {
        addonBefore: renderRangeInText(range, leftAddonText, separator),
        addonAfter: renderRangeInText(range, rightAddonText, separator)
      })
      return (
        <SideTextDescription
          range={range}
          leftText={renderRangeInText(range, leftText, separator)}
          rightText={renderRangeInText(range, rightText, separator)}
        >
          <Input {...inputPropsWithAddon} />
        </SideTextDescription>
      )
    }
    return (
      <SideTextDescription
        range={range}
        leftText={renderRangeInText(range, leftText, separator)}
        rightText={renderRangeInText(range, rightText, separator)}
      >
        <Input.TextArea {...inputProps} />
      </SideTextDescription>
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
