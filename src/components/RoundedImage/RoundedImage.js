import React from 'react'
import './RoundedImage.css'

export default function RoundedImage(props) {
  const { person, width, height } = props

  const path = `assets/images/${person.toLowerCase()}.png`

  return (
    <img src={path} width={width ? width : '20px'} height={height ? height : '20px'} alt='' />
  )
}
