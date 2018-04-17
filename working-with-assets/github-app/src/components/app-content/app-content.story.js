/*
'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import AppContent from '.'

storiesOf('AppContent component', module)
  .add('with userinfo', () => (
    <AppContent
      userinfo={{}}
      repos={[{}]}
      starred={[{}]}
      isFetching
      handleSearch={action('handleSearch')}
      getRepos={action('getRepos')}
      getStarred={action('getStarred')}
    />
  ))
*/
