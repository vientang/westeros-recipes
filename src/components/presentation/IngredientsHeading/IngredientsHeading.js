import React, { PropTypes } from 'react'

const IngredientsHeading = ({nutritionals}) => {
  const { calories, carbos, fats, fibers, proteins, time } = nutritionals
  return (
    <section className='ingredients-heading'>
      <h4>Ingredients</h4>
      <section className='nutritional-data'>
        {time && <i className='fa fa-clock-o' aria-hidden='true'> {time}</i>}
        {calories && <i className='fa fa-hourglass-half' aria-hidden='true'> {calories}</i>}
        {fibers && <i className='fa fa-leaf' aria-hidden='true'> {fibers}</i>}
        {carbos && <i className='fa fa-sliders' aria-hidden='true'> {carbos}</i>}
        {proteins && <i className='fa fa-hand-rock-o' aria-hidden='true'> {proteins}</i>}
        {fats && <i className='fa fa-exclamation' aria-hidden='true'> {fats}</i>}
      </section>
    </section>
  )
}

IngredientsHeading.propTypes = {
  nutritionals: PropTypes.object.isRequired
}

export default IngredientsHeading
