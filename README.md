# antd-group-slider

> Grouped-sliders based on ant-design

[![NPM](https://img.shields.io/npm/v/antd-group-slider.svg)](https://www.npmjs.com/package/antd-group-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save antd-group-slider

or

yarn add antd-group-slider
```

## Usage

```jsx
import React, { Component } from 'react'

import GroupSlider from 'antd-group-slider'
import 'antd-group-slider/dist/index.css'

class Example extends Component {
  render() {
    return <GroupSlider />
  }
}
```

## Props

| Name             | Type           | Meaning                                                                                                                                                                                                                                                                                                    | Posible values              | Default value                                                                      |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| max              | number         | Max value of range selection                                                                                                                                                                                                                                                                               | Positive numbers            | 100                                                                                |
| addButtonText    | string         | Display text of add range button                                                                                                                                                                                                                                                                           |                             | 'Add more range'                                                                   |
| removeButtonText | string         | Display text of remove range button                                                                                                                                                                                                                                                                        |                             | 'Remove last range'                                                                |
| onChange         | function(data) | Callback when range or description changes <br /> Format of object of callback: <br />- ranges: array of pairs of values of each range <br />- descriptions: array of description, with order respectively to ranges                                                                                       |                             |                                                                                    |
| descriptionType  | string         | Type of description. 'none' values will hide the description section                                                                                                                                                                                                                                       | 'input', 'textarea', 'none' | textarea                                                                           |
| placeholder      | object         | Object containing configuration of placeholder of description fields.<br /> Format of object:<br /> - description: string - if you want to put range values into the string, mark them as {{range}} inside your string<br /> - separator: string - separator between of a range pair values in placeholder |                             | description: 'Description for range {{range}}' <br /> separator: '-' (dash symbol) |
| marks            | object         | value indicator of sliders <br/> Refer to <a href="https://ant.design/components/slider/" target="_blank">Ant-design Input</a> to see the<b> mark </b>props to                                                                                                                                             |                             | 3 marks: <br/> - 0 <br/> - floor(max/2)<br/> - max                                 |
| initialValues    | object         | Initial data of component<br /> Format of object: <br />- ranges: array of pairs of values of each range <br />- descriptions: array of description, with order respectively to ranges                                                                                                                     |                             | ranges: [[min, max]] <br/> description: []                                         |

## License

MIT © [huyennbl](https://github.com/huyennbl)
