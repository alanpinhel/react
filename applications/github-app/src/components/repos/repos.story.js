'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from '.'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos' />
  ))

  .add('with repos', () => (
    <Repos
      title='Favoritos'
      repos={[{
        link: 'https://github.com/alanpinhel/angular',
        name: 'Angular'
      }]}
    />
  ))
