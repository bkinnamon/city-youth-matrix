import React from 'react'

import headerLogo from '../CYM_logo_v2.svg'
import '../App.css'

function Request() {
	return (
		<div class="trip-request-page">
			<div>
				<img src={headerLogo} alt = "City Youth Matrix logo" className = "header-logo"/>
				<h4 class="header-button">Go Back</h4>
			</div>
		</div>

		<div>
			<h2>Trip Request</h2>
			<div className = "event">
		</div>
			)
}

export default Request