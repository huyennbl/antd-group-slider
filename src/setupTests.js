import '@testing-library/jest-dom/extend-expect'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn()
    }
  }

configure({ adapter: new Adapter() })
