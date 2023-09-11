import React from 'react'
import Login from './login'

describe('<Login />', () => {
  it('renders', () => {
    cy.mount(<Login />)
  })
})