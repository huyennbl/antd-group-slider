import React from 'react'
import ReactDOM from 'react-dom'
import GroupSlider from './GroupSlider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  console.log(GroupSlider)
  ReactDOM.render(<GroupSlider />, div)
  ReactDOM.unmountComponentAtNode(div)
})
