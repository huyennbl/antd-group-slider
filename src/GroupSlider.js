import React, { useState, useEffect } from 'react'
import { Button, Divider, Col, Row } from 'antd'
import GroupSliderLine from './GroupSliderLine'
import './styles.css'
const DEFAULT_LEFT = 0
const DEFAULT_RIGHT = 100

const GroupSlider = ({ min = DEFAULT_LEFT, max = DEFAULT_RIGHT, ...props }) => {
  const [ranges, setRanges] = useState([[min, max]])
  const [descriptions, setDescriptions] = useState([])

  useEffect(() => {
    if (props.initialValues) {
      const { ranges, descriptions } = props.initialValues
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

  const syncRange = (range, index) => {
    let currentRight = range[1]
    const rightNeighbor = ranges[index + 1]
    if (rightNeighbor) {
      const nextRight = rightNeighbor[1]
      if (currentRight >= nextRight - 1) {
        currentRight = nextRight - 2
        rightNeighbor[0] = rightNeighbor[1] - 1
      } else {
        rightNeighbor[0] = currentRight + 1
      }
    }
    ranges[index][1] = currentRight
    setRanges([...ranges])
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
            onAfterRangeChange={(data) => syncRange(data, i)}
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
  return (
    <div className='antd-group-slider'>
      {renderPointRangeGroupLine()}
      <Row className='antd-group-slider__footer' gutter={4}>
        <Col span={12}>
          <Button
            className='antd-group-slider__btn-add-range'
            disabled={isAbleToAddRange()}
            ghost
            type='primary'
            onClick={addRange}
          >
            {addText}
          </Button>
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
