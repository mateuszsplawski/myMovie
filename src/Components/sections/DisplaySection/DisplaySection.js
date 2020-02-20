import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";

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
  movies,
  inputValue,
  currentPage,
  setCurrentPage,
  fetchNextPage
}) => {
  useEffect(() => {
    setCurrentPage(movies, currentPage);
  }, [movies]);
  return (
    <>
      <StyledWrapper>
        {movies !== undefined && (
          <InfiniteScroll
            element="ul"
            pageStart={0}
            loadMore={() => fetchNextPage(inputValue, currentPage)}
            hasMore={true || false}
          >
            {console.log(currentPage)}
            {console.log(movies)}
            {movies.map((movie, id) => (
              <MovieCard id={id} movie={movie} />
            ))}
          </InfiniteScroll>
        )}
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    inputValue: state.inputValue,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPage: (movies, currentPage) => {
      if (movies !== undefined && movies.length > 10) {
        dispatch({ type: "SET_CURRENT_PAGE", number: currentPage + 1 });
      } else if (movies !== undefined) {
        dispatch({ type: "SET_CURRENT_PAGE", number: 2 });
      } else {
        dispatch({ type: "SET_CURRENT_PAGE", number: 1 });
      }
    },
    fetchNextPage: (inputValue, currentPage) => {
      const key = "f086697e";
      fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&type=movie&s=${inputValue}&page=${currentPage}`
      )
        .then(result => result.json())
        .then(data =>
          dispatch({ type: "FETCH_NEXT_PAGE", data: [...data.Search] })
        )
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
