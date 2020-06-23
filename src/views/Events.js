import React, { Component } from 'react'
import API from '../helpers/api'
import headerLogo from '../CYM_logo_v2.svg'
import NavBar from '../components/NavBar'
import Card from './Card'

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    API.allEvents().then(data => {
      this.setState(data)
    })
  }

  render() {
    return (
      <div className="event-page" >
        <div>
          <img src={headerLogo} alt="City Youth Matrix logo" className="header-logo" />
        </div>

        <NavBar />

        <div className="event-list">
          <h2>Upcoming Events</h2>

          <div>
            {this.state.events.map(event =>
              <Card
                id={event.id}
                name={event.name}
                start={event.start}
                partner={event.partner}
                end={event.end}
              />
            )}
          </div>

          <button className="footer-button button-highlight">Events</button>
          <button className="footer-button">Trips</button>
          <button className="footer-button">Profile</button>
        </div>
      </div>
    )
  }
}

export default Events
