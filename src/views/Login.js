import React from 'react'

import logo from '../CYM_logo_v1.svg'
import '../App.css'

function Login() {
	return (
	<div>
		<div className = "img-container">
			<img src={logo} alt = "City Youth Matrix logo" className = "main-logo"/>
		</div>

		<div className = "login-form" >
			<div className = "container">
				<div>
					<label>Email</label>
					<input type = "text" name = "email" required/>
				</div>

				<div>
					<label>Password</label>
					<input type = "text" name = "password" required/>
				</div>

				<div>
					<button type = "submit" className="log-in-button">Log In</button>
				</div>
			</div>
		</div>

		
	</div>

	

		)
}

export default Login
