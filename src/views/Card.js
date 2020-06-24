import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, partner, start, end, id }) => {
	const startTime = new Date()
	startTime.setTime(start)
	const endTime = new Date()
	endTime.setTime(end)

	function addZero(i) {
		if (i < 10) {
			i = "0" + i
		}
		return i
	}

	function formatDate() {
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		return `${months[startTime.getMonth()]} ${startTime.getDate()}`
	}

	function formatTime() {
		let hours = startTime.getHours()
		let minutes = startTime.getMinutes()


		let endHours = endTime.getHours()
		let endMinutes = endTime.getMinutes()
		let meridiem = 'am'

		if (hours > 12) {
			hours -= 12
		}

		if (endHours > 12) {
			endHours -= 12
			meridiem = 'pm'
		}

		return `${hours}:${addZero(minutes)}-${endHours}:${addZero(endMinutes) + meridiem}`
	}

	return (
		<div className="event">
			<h3 className="event-header"><Link to={`/events/${id}`}>{name}</Link><span>{formatDate()}</span></h3>
			<p className="event-details">{partner}<span>{formatTime()}</span></p>
		</div>

	)
}

export default Card
