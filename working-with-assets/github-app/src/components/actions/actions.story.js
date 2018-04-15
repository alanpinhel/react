'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react';
import Actions from './index'

storiesOf('Div', module)
  .add('first story', () => (
    <Actions
      getRepos={action('Get Repos')}
      getStarred={action('Get Starred')} />
  ))

  .add('second story', () => (
    <Actions
      getRepos={action('Get Repos')}
      getStarred={action('Get Starred')} />
  ))
