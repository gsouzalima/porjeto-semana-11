import React from 'react'

const Tag = props => {
  const { text, color } = props

  const style = {
    backgroundColor: color
  }

  return (
    <div style={{...style}}>
      <p>{text}</p>
    </div>
  )
}

export default Tag
