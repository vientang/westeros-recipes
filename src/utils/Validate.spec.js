import React from 'react'
import { Validate } from './index'

test('Validate should validate that an email address has @ symbol', () => {
  const atSymbol = '@'
  const testEmail = 'test@test.com'
  const hasAtSymbol = Validate.email(testEmail)
  expect(hasAtSymbol).toEqual(true)
})
