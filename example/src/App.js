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
      <div className='header'>
        <div className='header__title'>antd-group-slider</div>
        <img className='header__logo' src='./favicon.png' alt='logo' />
      </div>

      <h3>
        NPM:{' '}
        <a
          href='https://www.npmjs.com/package/antd-group-slider'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://www.npmjs.com/package/antd-group-slider
        </a>
      </h3>
      <h3>
        GitHub:{' '}
        <a
          href='https://github.com/huyennbl/antd-group-slider'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://github.com/huyennbl/antd-group-slider
        </a>
      </h3>
      <p className='intro'>
        <strong>antd-group-slider</strong> provides a group of sliders that help
        to input multiple related range-data. It has data sync between sliders
        on every range change that which would help the user to avoid accidental
        missing range during actions.
      </p>
      <p className='note'>
        Please first have a look at{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://ant.design/components/slider/'
        >
          Ant Slider
        </a>{' '}
        to have a general idea of the use case of this component.
      </p>
      <div className='example'>
        <div className='example__code'>
          <pre>{'<GroupSlider />'}</pre>
        </div>
        <GroupSlider />
      </div>
      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  initialValues={{
    ranges: [
      [0, 25],
      [50, 100]
    ],
    descriptions: ['First', 'Third']
  }}
/>`}
          </pre>
        </div>
        <GroupSlider
          initialValues={{
            ranges: [
              [0, 25],
              [50, 100]
            ],
            descriptions: ['First', 'Third']
          }}
        />
      </div>
      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  initialValues={{
    ranges: [
      [0, 25],
      [50, 100]
    ],
    descriptions: ['First', 'Second']
  }}
  initialValuesConfig={{
    fillGaps: false
  }}
/>`}
          </pre>
        </div>
        <GroupSlider
          initialValues={{
            ranges: [
              [0, 25],
              [50, 100]
            ],
            descriptions: ['First', 'Second']
          }}
          initialValuesConfig={{
            fillGaps: false
          }}
        />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{`<GroupSlider
  min={100}
  max={500}
  addButtonText='More range'
  removeButtonText='Remove last'
/>`}
          </pre>
        </div>
        <GroupSlider
          min={100}
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
/>`}
          </pre>
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
/>`}
          </pre>
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
/>`}
          </pre>
        </div>
        <GroupSlider
          descriptionConfig={{
            type: 'none'
          }}
        />
      </div>

      <div className='example'>
        <div className='example__code'>
          <pre>{'<GroupSlider showDivider />'}</pre>
        </div>
        <GroupSlider showDivider />
      </div>
    </div>
  )
}

export default App
