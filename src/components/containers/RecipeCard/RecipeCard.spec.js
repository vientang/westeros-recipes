import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { RecipeCard } from './index'
import { APIManager } from 'utils'

test('RecipeCard should render a recipe card for each recipe', () => {
  APIManager.get('/api/recipes', null, (err, response) => {
    if (err) {
      return new Error(err)
    }
    const recipes = response.body.resource.recipes
    const component = shallow(<RecipeCard recipes={recipes}/>)
    expect(component.find(RecipeCard).length).toMatchSnapshot(recipes.length)
  })
})
