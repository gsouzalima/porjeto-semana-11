import React from 'react';
import './Board.css'
import Column from '../Column/Column';

export default function Board(props) {
  const { cards } = props

  const arr = cards.map(card => card.category)
  const categories = [...new Set(arr)]

  return (
    <div className='board'>
      {categories.map(category => (
        <Column cards={cards} category={category} />
      ))}
    </div>
  )
}
