import React from 'react';
import './Column.css'

import Card from '../Card/Card'

const categories = {
  'to-do': {
    name: '🗒️ To Do',
    mainColor: '#59B4D1',
    accentColor: 'rgba(0, 0, 0, 0.1)'
  },
  'in-progress': {
    name: '💻 In Progress',
    mainColor: '#D0935A',
    accentColor: 'rgba(0, 0, 0, 0.1)'
  },
  'review': {
    name: '🖍 Review',
    mainColor: '#945AD1',
    accentColor: 'rgba(0, 0, 0, 0.1)'
  },
  'done': {
    name: '🚀 Done',
    mainColor: '#59D090',
    accentColor: 'rgba(0, 0, 0, 0.1)'
  }
}

export default function Column(props) {
  const { cards, category } = props

  function filterCategory(card) {
    return card.category === category
  }
  const filteredCards = cards.filter(filterCategory)

  const columnConfig = {
    backgroundColor: categories[category].mainColor
  }

  return (
    <div className='column' style={{ ...columnConfig }}>
      <div className='column-shade' />
      <h1>{categories[category].name}</h1>
      {filteredCards.map((card, index) => (
        <Card key={index} title={card.title} person={card.person} tag={card.tag} />
      ))}
    </div>
  )
}
