import React from 'react'
import styled from 'styled-components'
import SkatePark from './SkatePark'


const StyledRegionContainer = styled.div`
  border-bottom: .25vw solid #ffd700;
`

const StyledParkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  border-radius: 5px;
  justify-items: center; 
`

const StyledRegionName = styled.h3`
  font-family: 'Dosis', sans-serif;
  color: #b30000;
  font-weight: 400; 
  font-size: 2.5vw; 
  text-align: left;
  margin-left: 1.5vw;  
`

const AreaParks = props => {
  const {region, parks} = props;
  return (
    <StyledRegionContainer>
      <StyledRegionName>{region}</StyledRegionName>
      <StyledParkContainer>
        {parks.map((park, index) => {
          return (
            <SkatePark name={park.name} featureImage={park.images[0]} address={park.address} phone={park.phone} website={park.website} key={index}/>
          )})}
      </StyledParkContainer>
    </StyledRegionContainer>
  )
}

export default AreaParks;