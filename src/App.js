import React from 'react'
import { Header, RecipePage } from './layout'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <section>
      <Header />
      <RecipePage />
    </section>
  )
}

export default App
