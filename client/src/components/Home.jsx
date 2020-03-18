import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SkatePark from './parks/SkatePark.jsx';

const StyledHomeTitle = styled.h1`
  font-weight: 900; 
`

const StyledParksContainer = styled.div`
  border: solid red; 
  display: flex; 
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%; 
  margin: auto;
  justify-content: center; 
  text-align: center; 
`

const StyledSingleParkContainer = styled.div`
  border: solid blue;
  width: 30%;
`

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
        <StyledHomeTitle> Zen Skate Co </StyledHomeTitle>
        <div> Los Angeles Skate Parks </div>
        <StyledParksContainer>
          {losAngelesSkateParks !== undefined && (
            losAngelesSkateParks.map((park, index) => {
              return (
                <StyledSingleParkContainer>
                  <SkatePark website={park.website} phone={park.phone} key={index} name={park.location_name}/>
                </StyledSingleParkContainer>
              )
          }))}

        </StyledParksContainer>
      </>
    );
  }
}

export default Home;
