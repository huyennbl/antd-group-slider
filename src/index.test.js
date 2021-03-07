import React from 'react'
import GroupSlider from './GroupSlider'
import { mount } from 'enzyme'
describe('<GroupSlider />', () => {
  const component = mount(<GroupSlider />)
  it("should render 1 disabled 'Remove' button", () => {
    const removeButton = component.find(
      'button[disabled].antd-group-slider__btn-remove-range'
    )
    expect(removeButton.length).toBe(1)
  })

  it("should render 1 disabled 'Add' button inside Tooltip", () => {
    const addButton = component.find(
      '.antd-group-slider__btn-add-range .ant-btn'
    )
    expect(addButton.length).toBe(1)
  })

  it('should render 1 slider', () => {
    const slider = component.find('div.antd-group-slider-item__slider')
    expect(slider.length).toBe(1)
  })
  it('should render 1 description', () => {
    const description = component.find(
      'div.antd-group-slider-item__description'
    )
    expect(description.length).toBe(1)
  })
})

describe(`<GroupSlider 
  initialValues={{
    ranges: [
      [0, 25],
      [30, 80]
    ],
    descriptions: ['First', 'Third']
  }} 
/>`, () => {
  const component = mount(
    <GroupSlider
      initialValues={{
        ranges: [
          [0, 25],
          [30, 80]
        ],
        descriptions: ['First', 'Third']
      }}
    />
  )
  const removeButton = component.find(
    'button.antd-group-slider__btn-remove-range'
  )
  it("should render 1 'Remove' button", () => {
    expect(removeButton.length).toBe(1)
  })

  const addButton = component.find('button.antd-group-slider__btn-add-range')
  it("should render 1 disabled 'Add' button without Tooltip", () => {
    expect(addButton.length).toBe(1)
  })

  it('should render 3 slider', () => {
    const addButton = component.find('div.antd-group-slider-item__slider')
    expect(addButton.length).toBe(3)
  })
  it('should render 3 description', () => {
    const addButton = component.find('div.antd-group-slider-item__description')
    expect(addButton.length).toBe(3)
  })
})

describe(`Add Range`, () => {
  const component = mount(
    <GroupSlider
      initialValues={{
        ranges: [
          [0, 25],
          [30, 80]
        ],
        descriptions: ['First', 'Third']
      }}
    />
  )
  const addButton = component.find('button.antd-group-slider__btn-add-range')

  addButton.simulate('click')
  it('should render 4 slider', () => {
    const sliders = component.find('div.antd-group-slider-item__slider')
    expect(sliders.length).toBe(4)
  })
  it('should render 4 description', () => {
    const descriptions = component.find(
      'div.antd-group-slider-item__description'
    )
    expect(descriptions.length).toBe(4)
  })
  it("should render 1 disabled 'Add' button inside Tooltip", () => {
    const addButton = component.find(
      '.antd-group-slider__btn-add-range .ant-btn'
    )
    expect(addButton.length).toBe(1)
  })
})

describe(`Remove Range`, () => {
  const component = mount(
    <GroupSlider
      initialValues={{
        ranges: [
          [0, 25],
          [30, 80]
        ],
        descriptions: ['First', 'Third']
      }}
    />
  )
  const removeButton = component.find(
    'button.antd-group-slider__btn-remove-range'
  )
  removeButton.simulate('click')

  it('should render 2 slider', () => {
    const sliders = component.find('div.antd-group-slider-item__slider')
    expect(sliders.length).toBe(2)
  })
  it('should render 2 description', () => {
    const descriptions = component.find(
      'div.antd-group-slider-item__description'
    )
    expect(descriptions.length).toBe(2)
  })
  it("should render 1 disabled 'Add' button inside Tooltip", () => {
    const addButton = component.find(
      '.antd-group-slider__btn-add-range .ant-btn'
    )
    expect(addButton.length).toBe(1)
  })
})
