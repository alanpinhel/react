'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Pagination from '.'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination total={10} activePage={5} pageLink='http://mypage.com/page/%page%' />
))
