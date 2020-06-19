import React from 'react'

import headerLogo from '../CYM_logo_v2.svg'
import Card from './Card';
import '../App.css'

function Events() {
	const events = [
		{
			name: 'Lorem Ipsum Dolar',
			date: 'June 29',
			location: 'YMCA of Frederick County',
			time: '3:00-4:30 pm'
		}, 
		{
			name: 'Praesent Non Nisa Quam',
			date: 'June 30',
			location: 'Id Faucibus Mi',
			time: '5:45-8:00 pm'
		},
		{
			name: 'Sed Semper',
			date: 'July 2',
			location: 'Nunc Non Libero, Donec Lacinia',
			time: '4:00-6:00 pm'
		},
		{
			name: 'Justo Sit Amet Eleifend',
			date: 'July 2',
			location: 'Tristique At Ultricies Eget',
			time: '1:30-3:30 pm'
		},
		{
			name: 'Lacinia Arcu Sapien',
			date: 'July 6',
			location: 'Nullam Auctor',
			time: '3:15-4:15 pm'
		},

	]


	return (
		<div class="event-page">
			<div>
				<img src={headerLogo} alt = "City Youth Matrix logo" className = "header-logo"/>
			</div>

			<div className = "event-list">
				<h2>Upcoming Events</h2>

				<div>
					{events.map(event=>
						<Card
							name = {event.name}
							date = {event.date}
							location = {event.location}
							time = {event.time}
						/>
						)}
				</div>

				<button class="footer-button button-highlight">Events</button>
				<button class="footer-button">Trips</button>
				<button class="footer-button">Profile</button>
			</div>
		</div>
		)
}

export default Events