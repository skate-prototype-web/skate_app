import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SkatePark from './parks/SkatePark.jsx';
class Home extends Component {
  constructor () {
    super ()
    this.state = {
    }
  }

  componentDidMount () {
    axios
    .get(`https://data.lacity.org/resource/vwra-z6jg.json`)
    .then (({data}) => {
      this.setState({losAngelesSkateParks: data})
      })
    .catch (error => console.log('error', error))
  }

render() {
  const { losAngelesSkateParks } = this.state
  console.log (this.state)
    return (
      <>
        <div> Zen Skate Co </div>
        <div> Los Angeles Skate Parks </div>
          {losAngelesSkateParks !== undefined && (
            losAngelesSkateParks.map((park, index) => {
              return (
                <SkatePark website={park.website} phone={park.phone} key={index} name={park.location_name}/>
              )
          }))}
      </>
    );
  }
}

export default Home;
