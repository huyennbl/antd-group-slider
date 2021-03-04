import React from 'react'
import GroupSlider from 'antd-group-slider'
import 'antd-group-slider/dist/index.css'
import 'antd/dist/antd.css'
const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ color: 'darkred' }}>antd-group-slider</h1>
      <h3>
        NPM:{' '}
        <a
          href='https://www.npmjs.com/package/antd-group-slider'
          target='_blank'
        >
          https://www.npmjs.com/package/antd-group-slider
        </a>
      </h3>
      <h3>
        GitHub:{' '}
        <a href='https://github.com/huyennbl/antd-group-slider' target='_blank'>
          https://github.com/huyennbl/antd-group-slider
        </a>
      </h3>
      <div className='example'>
        <div className='example__code'>
          <pre>{'<GroupSlider />'}</pre>
        </div>
        <GroupSlider />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  max={500}
  addButtonText='More range'
  removeButtonText='Remove last'
/>`}</pre>
        </div>
        <GroupSlider
          max={500}
          addButtonText='More range'
          removeButtonText='Remove last'
        />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  descriptionConfig={{
    placeholder: 'Waiting for description of range {{range}}',
    leftText: 'Description of {{range}}: '
  }}
/>`}</pre>
        </div>
        <GroupSlider
          descriptionConfig={{
            placeholder: 'Waiting for description of range {{range}}',
            leftText: 'Description of {{range}}: '
          }}
        />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  descriptionConfig={{
    leftAddonText: 'Description of {{range}}: ', // addonText only works with type='input'
    type: 'input'
  }}
/>`}</pre>
        </div>
        <GroupSlider
          descriptionConfig={{
            leftAddonText: 'Description of {{range}}: ', // addonText only works with type='input'
            type: 'input'
          }}
        />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  descriptionConfig={{
    type: 'none'
  }}
/>`}</pre>
        </div>
        <GroupSlider
          descriptionConfig={{
            type: 'none'
          }}
        />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider showDivider />`}</pre>
        </div>
        <GroupSlider showDivider />
      </div>
    </div>
  )
}

export default App
