import React from 'react'
import { Login } from '../../components/containers'

const Header = () => {
  return (
    <header className='header'>
      <section className='logo-container'>
        <img className='logo' src='/assets/hellofresh-logo.svg' />
        <h3>Westeros Recipes</h3>
      </section>
      <section>
        <Login />
      </section>
    </header>
  )
}

export default Header
