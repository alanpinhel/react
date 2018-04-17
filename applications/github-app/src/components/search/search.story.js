'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from '.'

storiesOf('Search component', module)
  .add('disabled true', () => (
    <Search
      handleSearch={action('handleSearch')}
      isDisabled
    />
  ))

  .add('disabled false', () => (
    <Search
      handleSearch={action('handleSearch')}
      isDisabled={false}
    />
  ))
