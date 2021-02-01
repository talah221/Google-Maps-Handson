import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    address: { city: '', country: '' },
    position: { latitude: '-33.8569', longitude: '31.2152' }

  }
  componentDidMount() {
    this.getData()
  }
  async getData() {
    const API_KEY = "dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e"
    const URL = "https://api.ipdata.co/?api-key="
    try {
      const response = await fetch(URL + API_KEY)
      const data = await response.json()
      const { city, longitude, latitude, country_name } = data
      this.setState({
        address: { city, country: country_name },
        position: { longitude, latitude }
      })
    }
    catch (err) {
      console.log('Got Error Fetching the data:', err);
      throw err
    }

  }

  // There is also option to get user location via navigator.geolocation.getCurrentPosition(succ,fail)
  render() {
    const { longitude, latitude } = this.state.position
    const { city, country } = this.state.address
    return (
      <section className="App">
        <h1> Glassix Homework = React And Google Maps</h1>
        <div className="map-container">
          <h1>You current location is: {city}, {country}</h1>
          <iframe
            width="600"
            height="450"
            title="Google Maps"
            frameBorder="0" style={{ border: '0' }}
            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk
            &center=${latitude},${longitude}
            &zoom=14
            `}
          >
          </iframe>
        </div>
      </section>

    )
  }
}
