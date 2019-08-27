import { mount } from '@vue/test-utils'
import Component from '../CSpinner'

const ComponentName = 'CSpinner'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    grow: true,
    variant: 'success',
    small: true
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})

