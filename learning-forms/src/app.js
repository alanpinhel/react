'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      valor: 'valor inicial'
    }
  }

  render () {
    return (
      <form>
        <input type='text' value={this.state.valor} onChange={(e) => {
          this.setState({
            valor: e.target.value
          })
        }} />
      </form>
    )
  }
}

export default App
