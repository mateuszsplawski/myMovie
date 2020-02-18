import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroller";

const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-color: rgb(10, 10, 10);
  box-shadow: 0 0 40px -20px #000;
  border-radius: 5px;
  padding: 25px;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: space-around;
    width: 100%;
    padding: 0;
  }
`;

const DisplaySection = ({
  filteredMovies,
  setFilteredMovies,
  currentSearch
}) => {
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (filteredMovies !== undefined && filteredMovies.length > 10) {
      setCurrentPage(currentPage + 1);
    } else if (filteredMovies !== undefined) {
      setCurrentPage(2);
    } else {
      setCurrentPage(1);
    }
  }, [filteredMovies]);

  return (
    <>
      <StyledWrapper>
        {filteredMovies !== undefined && (
          <InfiniteScroll
            element="ul"
            pageStart={0}
            loadMore={() => {
              const key = "f086697e";
              fetch(
                `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&type=movie&s=${currentSearch}&page=${currentPage}`
              )
                .then(result => result.json())
                .then(data =>
                  setFilteredMovies(filteredMovies.concat([...data.Search]))
                )
                .catch(err => console.log(err));
            }}
            hasMore={true || false}
          >
            {filteredMovies.map((movie, id) => (
              <MovieCard id={id} movie={movie} />
            ))}
          </InfiniteScroll>
        )}
      </StyledWrapper>
    </>
  );
};

export default DisplaySection;
