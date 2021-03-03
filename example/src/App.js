import React from 'react'

import GroupSlider from 'antd-group-slider'
import 'antd-group-slider/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div style={{ width: '50vw' }}>
        <GroupSlider
          placeholder={{
            description: 'input value of range {{range}}',
            separator: ' to '
          }}
          max='42'
          addButtonText='Custom add text'
          onChange={(data) => {
            console.log(data)
          }}
          descriptionType='input'
        />
      </div>
    </div>
  )
}

export default App
