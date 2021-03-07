# antd-group-slider

> Grouped-sliders based on ant-design

> <b>antd-group-slider</b> provides a group of sliders that help input data with multiple ranges & description. It has data sync between sliders that will automatically fill the missing gap, hence improve UX, which help the user to avoid accidental missing range during inputting data.

> Please first have a look at [Ant Slider](https://ant.design/components/slider/) to have a general idea of the use case of this component.

> Feel free to request a feature by opening an issue :)

[![NPM](https://img.shields.io/npm/v/antd-group-slider.svg)](https://www.npmjs.com/package/antd-group-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Live demo

[https://huyennbl.github.io/antd-group-slider/](https://huyennbl.github.io/antd-group-slider/)

## Prerequisite

```
Ant Design v4
```

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

class GroupSliderExample extends Component {
  render() {
    return <GroupSlider />
  }
}
```

## Props

| Name                | Type           | Meaning                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Posible values                           | Default value                                                                                                                 |
| ------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| max                 | number         | Max value of range selection                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Positive numbers                         | 100                                                                                                                           |
| addButtonText       | string         | Display text of add range button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                          | 'Add more range'                                                                                                              |
| removeButtonText    | string         | Display text of remove range button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                          | 'Remove last range'                                                                                                           |
| onChange            | function(data) | Callback when range or description changes <br /> Format of object of callback: <br />- <b>ranges</b>: array of pairs of values of each range <br />- <b>descriptions</b>: array of description, with order respectively to ranges <br/> - <b>isFullRange</b>: true if all the ranges from 0 to max is covered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                          |                                                                                                                               |
| descriptionConfig   | object         | Object containing configuration of description fields.<br /> Format of object:<br /> - <b>placeholder</b>: string - description's placeholder string (\*)<br /> - <b>separator</b>: string - separator between of a range pair values in placeholder <br/> - <b>type</b>: string - Type of description. 'none' value will hide the description section <br/> - <b>leftText</b>: string - Text to be displayed before description input (\*) <br/> - <b>rightText</b>: string - Text to be displayed after description input (\*)<br/> - <b>leftAddonText</b>: string - Text to be displayed as addon before of description input (\*)(\*\*)<br/> - <b>rightAddonText</b>: string - Text to be displayed as addon after of description input (\*)(\*\*) <br/><br/> (\*): If you want to put range values into the string, mark them as {{range}} inside your string <br/>(\*\*): only applicable if <b>type='input'</b>. Refer to <a href="https://ant.design/components/slider/" target="_blank">Ant-design Input</a> to see addonBefore & addonAfter prop | <b>type</b>: 'input', 'none', 'textarea' | <b>placeholder</b>: 'Description for range {{range}}' <br /> <b>separator</b>: '-' (dash symbol) <br/><b>type</b>: 'textarea' |
| marks               | object         | Value indicator of sliders <br/> Refer to <a href="https://ant.design/components/slider/" target="_blank">Ant-design Input</a> to see the<b> marks </b>props                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                          | 3 marks: <br/> - 0 <br/> - floor(max/2)<br/> - max                                                                            |
| initialValues       | object         | Initial data of component<br /> Format of object: <br />- <b>ranges</b>: array of pairs of values of each range <br />- <b>descriptions</b>: array of description, with order respectively to ranges                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                          | <b>ranges</b>: [[0, max]] <br/> <b>descriptions</b>: []                                                                       |
| initialValuesConfig | object         | Format of object: <br/> - <b>fillGaps</b>: boolean - whether component should fill in the missing ranges of initial data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                          | <b>fillGaps</b>: true                                                                                                         |
| showDivider         | boolean        | Show <a href="https://ant.design/components/divider/" target="_blank">Divider</a> between each ranges                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                          | false                                                                                                                         |

## License

MIT © [huyennbl](https://github.com/huyennbl)
