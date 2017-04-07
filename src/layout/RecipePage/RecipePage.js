import React from 'react'
import { RecipesContainer } from '../../components/containers'

const RecipePage = () => {
  return (
    <section className='recipe-page-row'>
      <h2 className='recipe-page-feature'>Famous recipes from all of Westeros!</h2>
      <div className='recipe-page-container'>
        <RecipesContainer />
      </div>
    </section>
  )
}

export default RecipePage
