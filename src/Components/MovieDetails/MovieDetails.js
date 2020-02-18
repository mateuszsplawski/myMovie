import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  background-color: #080808;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  div {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 40%;
      object-fit: cover;
    }

    ul {
      padding: 25px 0 25px 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      li {
        padding: 10px;
        list-style: none;
        border-radius: 10px;
        position: relative;
        margin-top: 25px;
        min-width: 170px;
        span {
          position: absolute;
          top: -20px;
          left: 10px;
          color: #fcbf49;
        }
      }
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 20px;
    }
    div {
      flex-direction: column;

      ul {
        padding: 0;
        li {
          min-width: none;
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
`;

const MovieDetails = ({ match }) => {
  const movie = match.params.movie;
  const [movieDetails, setMovieDetails] = useState(false);
  useEffect(() => {
    const key = "f086697e";
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&type=movie&t=${movie}`
    )
      .then(result => result.json())
      .then(data => setMovieDetails(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <StyledWrapper>
      <h1>{movie}</h1>
      <div>
        <img src={movieDetails.Poster} alt="plakat" />
        <ul>
          <li>
            <span>Tytuł</span>
            {movieDetails && movieDetails.Title}
          </li>
          <li>
            <span>Rok powstania</span>
            {movieDetails && movieDetails.Year}
          </li>
          <li>
            <span>Pierwszy raz w kinach</span>
            {movieDetails && movieDetails.Released}
          </li>
          <li>
            <span>Długość trwania</span>
            {movieDetails && movieDetails.Runtime}
          </li>
          <li>
            <span>Reżyser</span>
            {movieDetails && movieDetails.Director}
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

export default MovieDetails;
