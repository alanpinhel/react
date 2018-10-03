'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ onSave }) => (
  <header className='editor-header'>
    <button className='save' onClick={onSave}>Salvar</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
