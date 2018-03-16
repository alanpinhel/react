'use strict'

import React from 'react'
import Title from './title'

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title
          name='Alan'
          lastName={{
            first: 'Pi',
            last: 'nhel'
          }} />
      </div>
    )
  }
})

export default App
