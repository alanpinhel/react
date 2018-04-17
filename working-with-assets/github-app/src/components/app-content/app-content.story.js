'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import AppContent from '.'

storiesOf('AppContent component', module)
  .add('not fetching', () => (
    <AppContent
      userinfo={{
        username: 'alanpinhel',
        photo: 'https://avatars3.githubusercontent.com/u/22641949?v=4',
        login: 'alanpinhel',
        repos: 26,
        followers: 2,
        following: 3
      }}
      repos={[{
        link: 'https://github.com/alanpinhel/angular',
        name: 'Angular'
      }]}
      starred={[{
        link: 'https://github.com/alanpinhel/angular',
        name: 'Angular'
      }]}
      handleSearch={action('handleSearch')}
      getRepos={action('getRepos')}
      getStarred={action('getStarred')}
    />
  ))

  .add('fetching', () => (
    <AppContent
      userinfo={{
        username: 'alanpinhel',
        photo: 'https://avatars3.githubusercontent.com/u/22641949?v=4',
        login: 'alanpinhel',
        repos: 26,
        followers: 2,
        following: 3
      }}
      repos={[{
        link: 'https://github.com/alanpinhel/angular',
        name: 'Angular'
      }]}
      starred={[{
        link: 'https://github.com/alanpinhel/angular',
        name: 'Angular'
      }]}
      isFetching
      handleSearch={action('handleSearch')}
      getRepos={action('getRepos')}
      getStarred={action('getStarred')}
    />
  ))
