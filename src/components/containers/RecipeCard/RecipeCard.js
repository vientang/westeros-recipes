import React, { Component, PropTypes } from 'react'
import { Rating } from '../index'
import { User, Ingredients, IngredientsHeading } from '../../presentation'

class RecipeCard extends Component {
  constructor () {
    super()
    this.state = {
      currIndexFav: '',
      currIndexIgr: '',
      heartColor: 'black',
      heartIcon: 'fa fa-heart',
      isModalOpen: false,
      name: '',
      headline: ''
    }
    this.handleLike = this.handleLike.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleLike (event) {
    event.preventDefault()
    let id = event.target.getAttribute('id')
    let color = (this.state.heartColor === 'black') ? 'red' : 'black'
    this.setState({
      currIndexFav: +id,
      heartColor: color,
      heartIcon: 'fa fa-heart' + ' ' + color
    })
  }

  openModal (event) {
    event.preventDefault()
    let id = event.target.getAttribute('id')
    let name = event.target.getAttribute('name')
    let headline = event.target.getAttribute('data-headline')
    document.body.classList.add('no-scroll')
    this.setState({
      currIndexIgr: +id,
      isModalOpen: true,
      name: name,
      headline: headline
    })
  }

  closeModal () {
    document.body.classList.remove('no-scroll')
    this.setState({
      currIndexIgr: '',
      isModalOpen: false
    })
  }

  render () {
    return (
      <section className='recipe-card-group'>
        {this.props.recipes && this.props.recipes.map((recipe, idx) => {
          const { calories, carbos, fats, fibers, proteins, time } = recipe
          const nutritionals = { calories, carbos, fats, fibers, proteins, time }
          return <section className='recipe-card' key={idx}>
            <h4>{recipe.name} <small>{recipe.headline}</small></h4>
            <img className='recipe-image' src={recipe.thumb} />

            <section className='recipe-gauge'>
              <Rating />
              <i
                className={(this.state.currIndexFav === '' || this.state.currIndexFav === idx) ? this.state.heartIcon : 'fa fa-heart'}
                aria-hidden='true'
                id={idx}
                onClick={this.handleLike} />
              <span>Difficulty level: {recipe.difficulty}</span>
            </section>

            <p>{recipe.description}</p>

            <User user={recipe.user} />

            <section>
              <IngredientsHeading nutritionals={nutritionals} />
              <p className='see-ingredients-container'>
                <span
                  className='see-ingredients-text'
                  id={idx}
                  name={recipe.name}
                  data-headline={recipe.headline}
                  onClick={this.openModal}>
                  See the ingredients
                </span>
              </p>

              {typeof this.state.currIndexIgr === 'number' &&
                <Ingredients
                  name={this.props.recipes[this.state.currIndexIgr].name}
                  headline={this.props.recipes[this.state.currIndexIgr].headline}
                  ingredients={this.props.recipes[this.state.currIndexIgr].ingredients}
                  isOpen={this.state.isModalOpen}
                  onClick={this.openModal}
                  onClose={this.closeModal}>
                  <button onClose={this.closeModal}>Close</button>
                </Ingredients>}
            </section>
          </section>
        })}
      </section>
    )
  }
}

RecipeCard.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeCard
