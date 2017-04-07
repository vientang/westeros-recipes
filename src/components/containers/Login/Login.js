import React, { Component } from 'react'
import { Validate } from '../../../utils'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      	visitor: {
      		email: '',
      		password: ''
      	},
      valid: false,
      message: ''
    }
    this.handleLogIn = this.handleLogIn.bind(this)
    this.recordVisitor = this.recordVisitor.bind(this)
    this.clearMessage = this.clearMessage.bind(this)
  }

  recordVisitor (event) {
    let updated = Object.assign({}, this.state.visitor)
    updated[event.target.id] = event.target.value
    this.setState({
      visitor: updated
    })
  }

  handleLogIn (event) {
    event.preventDefault()
    const input = this.state.visitor.email
    const validEmail = Validate.email(input)
    // next step is to validate password
    if (validEmail) {
      this.setState({message: 'Your email is valid!', valid: true}, this.clearMessage())
    } else {
      this.setState({message: 'Try again, your email is not valid', valid: false}, this.clearMessage())
    }
  }

  clearMessage () {
    setTimeout(() => {
      this.setState({message: ''})
    }, 2000)
  }

  render () {
    return (
      <section className='login-component'>
        <form className='login-form'>
          <input className='form-input' onChange={this.recordVisitor} type='email' id='email' placeholder='Email' /><br />
          <input className='form-input' onChange={this.recordVisitor} type='password' id='password' placeholder='Password' /><br />
          <button className='login-button' onClick={(event) => this.handleLogIn(event)}>Log In</button>
        </form>
        <span
          key={this.state.visitor.email}
          className={(this.state.valid ? 'success' : 'failed')}>
          {this.state.message}
        </span>
      </section>
    )
  }
}

export default Login
