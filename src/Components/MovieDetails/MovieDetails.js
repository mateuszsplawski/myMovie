import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const StyledWrapper = styled.main`
  background-color: #080808;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 0 0;

    div {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      img {
        width: 60%;
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
            font-size: 18px;
            white-space: nowrap;
            color: #fcbf49;
          }
        }
      }
    }

    @media (max-width: 450px) {
      padding: 20px;

      h1 {
        font-size: 24px;
        text-align: center;
      }
      div {
        flex-direction: column;

        ul {
          padding: 0;
          li {
            min-width: none;
            text-align: center;
            font-size: 16px;
          }
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
      `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&type=movie&t=${movie}`
    )
      .then(result => result.json())
      .then(data => setMovieDetails(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <StyledWrapper>
      <Logo position />
      <section>
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
      </section>
    </StyledWrapper>
  );
};

export default MovieDetails;
