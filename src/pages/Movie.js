import React from 'react'
import styled from 'styled-components'

const Movie = () => {
  return (
    <MainBox>
      <Title>Coin Tracker</Title>
    </MainBox>
  )
}

const MainBox = styled.div`
  width: 60%;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  background-color: #f3e7f6;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export default Movie
