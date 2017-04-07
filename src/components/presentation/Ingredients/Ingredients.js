import React, { PropTypes } from 'react'

const Ingredients = ({name, headline, ingredients, isOpen, onClose}) => {
  if (isOpen === false) {
    return null
  }
  return (
    <section className={isOpen ? 'backdrop' : ''}>
      <section className='ingredients-row modal'>
        <ul className='ingredients-col'>
          <div className='modal-title'>
            <h5><span onClick={onClose}>X</span></h5>
            <h4>Ingredients for {name} <small>{headline}</small></h4>
          </div>
          <hr />

          {ingredients.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}

        </ul>
      </section>
    </section>
  )
}

Ingredients.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Ingredients
