import React, { PropTypes } from 'react'

const User = ({user}) => {
  const {name, email} = user
  const mailto = `mailto:${email}`
  return (
    <section className='user-info'>
      <p>Recipe by {name}</p>
      <a href={mailto}><i className='fa fa-envelope' aria-hidden='true' /></a>
      <i className='fa fa-globe' aria-hidden='true' />
    </section>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
