import React from 'react'
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"

const ErrDiv = styled.div`
  background-color: rgba(20, 100, 200, 0.8);
  height: calc(100vh - 80px);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  p{
    padding: 2rem;
    font-size: 4rem;
  }

  @media screen and (max-width: 400px){
    p{
      padding: 0.5rem;
      font-size: 2rem;
    }
  }
`
export const Error = () => {
  const ErrorDiv = () => (
    <ErrDiv>
        <p>404 Error!!!</p>
        <p>Page Not Found...</p>
    </ErrDiv>
  )

  return (
    <ScrollAnimation animateIn="fadeIn">
      <ErrorDiv />
    </ScrollAnimation>
  )
}
