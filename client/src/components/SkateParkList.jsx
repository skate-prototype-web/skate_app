import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AreaParks from './parks/AreaParks';
import dummyData from '../../../server/dummyData.js'

const StyledHomeTitle = styled.h1`
  font-weight: 400;
  color: #b30000; 
  font-family: 'Dosis', sans-serif;
  margin-left: 3vw; 
  font-size: 3vw;
  margin-top: 2vw; 
  margin-bottom: 0;   
`

const StyledParksContainer = styled.div`
  background: rgba(255, 255, 255, .9);  
  display: flex; 
  flex-wrap: wrap;
  flex-direction: column;
  width: 85%; 
  margin: auto;
  justify-content: center; 
  text-align: center; 
`

class SkateParkList extends Component {
  constructor () {
    super ()
    this.state = {
    }
  }

  componentDidMount () {

    console.log (dummyData, 'DATA')
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
        <StyledHomeTitle>Los Angeles Area Parks</StyledHomeTitle> 
        <StyledParksContainer>
          {dummyData.map((region, index) => {
              return (
                <AreaParks region={region.region} parks={region.parks} key={index}/>
              )
          })}
        </StyledParksContainer>
      </>
    );
  }
}

export default SkateParkList;