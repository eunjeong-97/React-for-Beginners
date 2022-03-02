import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MovieCard from '../components/MovieCard'

const Movie = () => {
  const [movieList, setMovieList] = useState([])

  const getMovieList = async () => {
    const json = await axios(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    )
    setMovieList(json.data.data.movies)
  }

  useEffect(() => getMovieList(), [])
  return (
    <MainBox>
      <Title>Movie</Title>
      {movieList.length !== 0 &&
        movieList.map(movieItem => (
          <MovieCard key={movieItem.id} movieData={movieItem} />
        ))}
    </MainBox>
  )
}

const MainBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  background-color: #f3e7f6;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export default Movie
