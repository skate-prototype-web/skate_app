import React from 'react'
import { Router, Link } from '@reach/router'
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import About from './About'
import SkateParkList from './SkateParkList'

const StyledNavContainer = styled.div`
  display: flex;
  align-items: center; 
  height: 5vw;
  background: #b30000;
  justify-content: flex-end; 
  border-bottom: .25vw solid #ffd700;   
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end; 
  margin-right: 1vw;
  align-items: center;   
`

const StyledLink = styled(Link)`
  color: white;
  margin-left: .75vw;
  margin-right: .75vw; 
  font-size: 1.75vw; 
  font-family: 'Dosis', sans-serif;
  font-weight: 400; 
  text-decoration: none;
    
  @media (max-width: 900px) {
    font-size: 2.5vw
  } 
  
  &:hover {
    font-weight: 200;
    color: #ffd700;
  }
 
`

const MainRouter = () => {
  return (
    <>
      <Header/>
      <StyledNavContainer>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <span>  </span>
          <StyledLink to="/skateparks">Skate Parks</StyledLink>
          <span>  </span>
          <StyledLink to="/about">About</StyledLink>
        </StyledNav>
      </StyledNavContainer>
      <Router>
        <SkateParkList path="/skateparks"/>
        <About path="/about"/>
        <Home path="/"/>
      </Router>
    </>
  )
}

export default MainRouter