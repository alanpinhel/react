'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import UserInfo from '.'

storiesOf('UserInfo component', module)
  .add('first story', () => (
    <UserInfo
      userinfo={{
        username: 'alanpinhel',
        photo: 'https://avatars3.githubusercontent.com/u/22641949?v=4',
        login: 'alanpinhel',
        repos: 26,
        followers: 2,
        following: 3
      }}
    />
  ))
