'use strict'

import React, { Component } from 'react'
import Title from 'components/title'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { title: '...' }
  }

  getTitle () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    try {
      this.setState({ title: await this.getTitle() })
    } catch (error) { }
  }

  render () {
    return (
      <div>
        <Title>{this.state.title}</Title>
      </div>
    )
  }
}

export default App
