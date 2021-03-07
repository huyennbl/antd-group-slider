import React, { useState, useEffect } from 'react'
import { Button, Divider, Col, Row, Tooltip } from 'antd'
import GroupSliderLine from './GroupSliderLine'
import { fillGaps, syncRanges } from './rangeUtils'
import './styles.css'
const DEFAULT_LEFT = 0
const DEFAULT_RIGHT = 100

const TooltipAddButton = ({ children }) => {
  return (
    <Tooltip
      trigger='hover'
      placement='top'
      title='Only can add range if the point range is not fully covered'
    >
      {children}
    </Tooltip>
  )
}

const GroupSlider = ({ min = DEFAULT_LEFT, max = DEFAULT_RIGHT, ...props }) => {
  const [ranges, setRanges] = useState([[min, max]])
  const [descriptions, setDescriptions] = useState([])

  useEffect(() => {
    if (props.initialValues) {
      const processedInitialValues = fillGaps(props.initialValues)
      const { ranges, descriptions } = processedInitialValues
      setRanges(ranges)
      setDescriptions(descriptions)
    }
  }, [])

  const isFullRange = () => {
    const values = new Set()
    ranges.forEach((r) => {
      const [left, right] = r
      for (let i = left; i <= right; i++) {
        if (i >= 0 && i <= 100) values.add(i)
      }
    })
    return values.size === parseInt(max) + 1
  }

  useEffect(() => {
    if (props.onChange) {
      props.onChange({ ranges, descriptions, isFullRange: isFullRange() })
    }
  }, [ranges, descriptions])

  const addRange = () => {
    const newRanges = [...ranges]
    const lastIndex = ranges.length - 1
    const left = ranges[lastIndex][1]
    newRanges.push([left + 1, max])
    setRanges(newRanges)
  }

  const syncNewRange = (updatedRange, index) => {
    const nextRanges = syncRanges(ranges, updatedRange, index)
    setRanges(nextRanges)
  }

  const updateDescription = (description, index) => {
    const nextDescriptions = [...descriptions]
    nextDescriptions[index] = description
    setDescriptions(nextDescriptions)
  }

  const renderPointRangeGroupLine = () => {
    return ranges.map((range, i) => {
      return (
        <React.Fragment key={range}>
          <GroupSliderLine
            marks={props.marks}
            descriptionConfig={props.descriptionConfig}
            onAfterRangeChange={(data) => syncNewRange(data, i)}
            updateDescription={(data) => updateDescription(data, i)}
            initialDescription={descriptions[i]}
            value={range}
            max={max}
          />
          {props.showDivider ? <Divider /> : <React.Fragment />}
        </React.Fragment>
      )
    })
  }

  const isAbleToAddRange = () => {
    const lastIndex = ranges.length - 1
    return ranges[lastIndex][1] > max - 2
  }

  const cannotRemoveRange = () => {
    return ranges.length <= 1
  }

  const removeLastRange = () => {
    ranges.pop()
    const lastIndex = ranges.length - 1
    ranges[lastIndex][1] = max
    setRanges([...ranges])
    descriptions.pop()
    setDescriptions([...descriptions])
  }

  const removeText = props.removeButtonText || 'Remove last range'
  const addText = props.addButtonText || 'Add more range'
  const addButton = (
    <Button
      className='antd-group-slider__btn-add-range'
      disabled={isAbleToAddRange()}
      ghost
      type='primary'
      onClick={addRange}
    >
      {addText}
    </Button>
  )
  return (
    <div className='antd-group-slider'>
      {renderPointRangeGroupLine()}
      <Row className='antd-group-slider__footer' gutter={4}>
        <Col span={12}>
          {isFullRange() ? (
            <TooltipAddButton>{addButton}</TooltipAddButton>
          ) : (
            addButton
          )}
        </Col>
        <Col span={12}>
          <Button
            className='antd-group-slider__btn-remove-range'
            danger
            disabled={cannotRemoveRange()}
            onClick={removeLastRange}
          >
            {removeText}
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default GroupSlider
