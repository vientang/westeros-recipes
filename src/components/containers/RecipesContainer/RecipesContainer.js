import React, { Component } from 'react'
import { RecipeCard } from 'components/containers'
import { APIManager } from 'utils'

class RecipesContainer extends Component {
  constructor () {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount () {
		// get data from recipes.json and save to state
    APIManager.get('/api/recipes', null, (err, response) => {
      if (err) {
        return new Error(err)
      }
      const results = response.body.resource.recipes
      this.setState({recipes: results})
    })
  }

  render () {
    return (
      <section>
        <div>
          <RecipeCard recipes={this.state.recipes} />
        </div>
      </section>
    )
  }
}

export default RecipesContainer
