import React from 'react'
import PropTypes from 'prop-types'
import parseHtml from 'html-react-parser'

export const HTMLContent = ({ content, className }) => (
    <section className={className}>{parseHtml(content)}</section>
)

const Content = ({ content, className }) => (
  <section className={className}>{content}</section>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
