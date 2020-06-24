import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../helpers/api';
import Layout from '../components/Layout';
import Card from './Card';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    API.allEvents().then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <Layout>
        <h2>Upcoming Events</h2>

        <div>
          {this.state.events.map(event =>
          <Link key={event.id} className="event-link" to={`/events/${event.id}`}>
            <Card
              name={event.name}
              date={event.date}
              start={event.start}
              partner={event.partner}
              end={event.end}
            />
          </Link>
          )}
        </div>
      </Layout>
    )
  }
}

export default Events
