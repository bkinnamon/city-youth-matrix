import React from 'react'

import headerLogo from '../CYM_logo_v2.svg'
import '../App.css'

function Event({events}) {
	return (
		<div className="single-event-page">
			<div>
				<img src={headerLogo} alt = "City Youth Matrix logo" className = "header-logo"/>
				<h4 className="header-button">Go Back</h4>
			</div>

			<div className="single-event">
				<div className="single-event-details">
					<h2>{events[0].name}</h2>
					<h3>{events[0].date}, {events[0].time}</h3>
					<p>{events[0].location}</p>
					<p>{events[0].address}</p>
				</div>
					<p>{events[0].description}</p>
				<div className="trip-request-button-div">
					<button className="trip-request-button">Trip Request</button>
				</div>
			</div>

			<button className="footer-button">Events</button>
			<button className="footer-button">Trips</button>
			<button className="footer-button">Profile</button>
		</div>

		)
	}


export default Event