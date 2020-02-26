import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TweenMax, Power3 } from "gsap";

const StyledLi = styled.li`
  width: 200px;
  height: 300px;
  margin: 15px 10px;
  list-style: none;
  transition: box-shadow 0.2s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  :hover {
    box-shadow: 0 0 20px 0 #fcbf49;
    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 400px;
  }
`;

const MovieCard = ({ movie, id }) => {
  let movieElement = useRef([]);
  useEffect(() => {
    TweenMax.staggerFrom(
      movieElement,
      1.2,
      {
        opacity: 0,
        scale: 0.7,
        ease: Power3.easeOut,
        force3D: true
      },
      0.2
    );
  }, []);
  return (
    <StyledLi ref={el => (movieElement = el)} key={id}>
      {/* <h1>{movie.Title}</h1> */}
      <Link className={"movie__link"} to={`MoviesApp/${movie.Title}`}>
        <img
          alt=""
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg"
          }
        />
      </Link>
    </StyledLi>
  );
};

export default MovieCard;
