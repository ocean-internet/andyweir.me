import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <section className={className} dangerouslySetInnerHTML={{ __html: content }} />
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
