import React from 'react'
import { shallow } from 'enzyme'
import { APIManager } from './index'

test('APIManager should read data from api/recipes endpoint', () => {
  const url = '/api/recipes'
  APIManager.get(url, null, (err, response) => {
    if (err) {
      return err;
    }
    const recipes = response.body.resource.recipes
    const component = shallow(<RecipeCard recipes={recipes}/>)
    expect(component.props()).toEqual(recipes)
  })
})
