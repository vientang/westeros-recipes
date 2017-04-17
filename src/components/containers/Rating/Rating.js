import React, { Component } from 'react'

const empty = 'assets/star_empty.png'
const starred = 'assets/star_filled.png'

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: false,
      isStarred: false,
      dataId: '',
      starredId: ''
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.setRating = this.setRating.bind(this)
    this.isRated = this.isRated.bind(this)
  }

  handleMouseOut (event) {
    event.preventDefault()
    let dataId = event.target.getAttribute('data-id')
    let lastStarredId
    if (typeof this.state.starredId === 'number') {
      lastStarredId = Math.min(+dataId, this.state.starredId)
    }
    if (dataId > this.state.starredId) {
      this.setState({
        hovered: false,
        dataId: lastStarredId || ''
      })
    }
  }

  handleMouseOver (event) {
    event.preventDefault()
    let dataId = event.target.getAttribute('data-id')
    if (dataId > this.state.starredId) {
      this.setState({
        hovered: true,
        dataId: +dataId
      })
    }
  }

  setRating (event) {
    event.preventDefault()
    let dataId = event.target.getAttribute('data-id')
    this.setState({
      hovered: true,
      isStarred: true,
      dataId: +dataId,
      starredId: +dataId
    })
  }

  isRated (n) {
    if ((this.state.hovered || this.state.starred) && this.state.dataId >= n) {
      return true
    }
  }

  render () {
    return (
      <section>
        <img
          className='stars'
          data-id='1'
          src={this.isRated(1) ? starred : empty}
          onClick={this.setRating}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} />
        <img
          className='stars'
          data-id='2'
          src={this.isRated(2) ? starred : empty}
          onClick={this.setRating}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} />
        <img
          className='stars'
          data-id='3'
          src={this.isRated(3) ? starred : empty}
          onClick={this.setRating}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} />
        <img
          className='stars'
          data-id='4'
          src={this.isRated(4) ? starred : empty}
          onClick={this.setRating}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} />
        <img
          className='stars'
          data-id='5'
          src={this.isRated(5) ? starred : empty}
          onClick={this.setRating}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} />
      </section>
    )
  }
}

export default Rating
