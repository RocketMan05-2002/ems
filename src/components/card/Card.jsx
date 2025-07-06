import React from 'react'
import "./card.css"

const Card = ({heading,content}) => {
  return (
    <div className='card'>
        <h3>{heading}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Card
