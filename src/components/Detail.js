import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const { id } = useParams()
  console.log(movieDetail)

  const getMovieDetail = async () => {
    const json = await axios(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    )
    setMovieDetail(json.data.data.movie)
  }
  useEffect(() => getMovieDetail(), [])
  const { title, large_cover_image } = movieDetail
  return (
    <MainBox>
      {Object.keys(movieDetail).length === 0 && <Title>Loading...</Title>}
      <Title>{title}</Title>
      <Img src={large_cover_image} />
    </MainBox>
  )
}

const MainBox = styled.div``

const Title = styled.div``

const Img = styled.img``

export default Detail
