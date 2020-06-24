import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, partner, date, start, end }) => {
  return (
    <div className="event">
      <h3 className="event-header">{name}<span>{date}</span></h3>
      <p className="event-details">{partner}<span>{start}-{end}</span></p>
    </div>
  )
}

export default Card
