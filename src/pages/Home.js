import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return <MainBox>Welcome to React Project</MainBox>
}

const MainBox = styled.div`
  width: 60%;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  background-color: #f3e7f6;
`

export default Home
