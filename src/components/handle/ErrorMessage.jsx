import React from 'react'

const ErrorMessage = ({ error }) => (
  <span>An error occured: {error.toString()}</span>
)

export default ErrorMessage