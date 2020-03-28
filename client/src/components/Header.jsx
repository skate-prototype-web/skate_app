import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import GlobalFonts from '../fonts/fonts'
import ensoCursiveRed from '../images/enso_cursive_red_nosub.png'

const StyledHeaderContainer = styled.div`
  display: flex;  
  flex-direction: row;
  border-bottom: .25vw solid #ffd700;
  padding: 1vw;
  align-items: center;
`

const StyledLogo = styled.img `
  width: auto;
  height: 8vw;  
`

const StyledHeaderTitle = styled.h3`
  font-size: 5vw; 
  margin: 0;
  margin-left: 24%;  
  font-family: 'Osaka-Sans Serif';
  font-style: normal;
  color: #b30000;  
`

const Header = () => {
  return (
    <>
      <StyledHeaderContainer>
        <GlobalFonts/>
        <StyledLogo src={ensoCursiveRed}/>
        <StyledHeaderTitle>Zen Skate Co.</StyledHeaderTitle>
      </StyledHeaderContainer>
    </>
  )
}

export default Header;
