'use strict'

import React from 'react'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li>
          <a key={index} href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default Repos
