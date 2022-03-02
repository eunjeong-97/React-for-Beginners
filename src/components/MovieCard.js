import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MovieCard = ({ movieData }) => {
  const { id, title_long, summary, medium_cover_image, genres } = movieData
  return (
    <MainBox>
      <Link to={`/movie/${id}`}>
        <Title>{title_long}</Title>
        <GenreBox>
          {genres.map((genreItem, genreItemIndex) => (
            <GenreItem key={genreItemIndex}>{genreItem}</GenreItem>
          ))}
        </GenreBox>
        <MovieImg src={medium_cover_image} />
      </Link>
      <Description>
        {summary.slice(0, 100)}
        {summary.length > 100 && '...'}
      </Description>
    </MainBox>
  )
}

const MainBox = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const GenreBox = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`
const GenreItem = styled.li`
  display: inline-block;
  padding: 2px;
  border: 1px solid black;
  background-color: #cccccc;
  margin-right: 5px;
`

const MovieImg = styled.img`
  width: 100px;
  height: 100px;
`

const Description = styled.p``

export default MovieCard
