import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Login } from './index'
import { Validate } from '../../../utils'

test('Login snapshot test', () => {
  const component = shallow(<Login />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Login should validate if email string is acceptable', () => {
  const email = 'vt@vt.com'
  const validEmail = Validate.email(email) ? email : null
  const component = shallow(<Login />)
  if (validEmail) {
    component.setState({message: 'Your email is valid!'})
  } else {
    component.setState({message: 'Try again, your email is not valid'})
  }
  expect(component.state('message')).toEqual('Your email is valid!')
})

test('Login should clear validation message after 2000ms', () => {
  const component = shallow(<Login />)
  component.setState({valid: true, message: 'Your email is valid!'})
  expect(component.find('span').render().text()).toEqual('Your email is valid!')
  setTimeout(() => {
    expect(component.contains(<span key='' className='failed'> </span>)).toEqual(true)
  }, 2000)
})
