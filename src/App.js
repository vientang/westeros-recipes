import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, RecipePage } from './layout'
import '../public/stylesheets/main.css'

const App = () => {
  return (
    <Router>
      <section>
        <Route path='/' exact component={Header} />
        <RecipePage />
      </section>
    </Router>
  )
}

export default App
