import React from 'react';

const Card = ({name, date, location, time}) => {
	return (
		<div className="event">
			<h3>{name}<span>{date}</span></h3>
			<p className="event-details">{location}<span>{time}</span></p>
		</div>

		)
}

export default Card
