import React from "react";
import styled from "styled-components";
import DisplaySection from "./sections/DisplaySection/DisplaySection";
import SearchSection from "./sections/SearchSection/SearchSection";
import { connect } from "react-redux";
import Logo from "./Logo/Logo";

const StyledWrapper = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Exo:800&display=swap");
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props => (props.displayMode ? "unset" : "100%")};
  min-height: 100vh;
  background: url("https://wallpaperaccess.com/full/846885.jpg") center;
  background-size: cover;
  padding: ${props => (props.displayMode ? "5vh 5vw" : "10vh 10vw")};
  transition: padding 0.5s;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-color: ${props => (props.displayMode ? "#111" : "#000")};
    opacity: ${props => (props.displayMode ? "100%" : "60%")};
    transition: opacity 0.5s, background 0.5s;
  }

  .innerWrapper {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    header {
      align-self: flex-start;
      h1 {
        font-family: "Exo", sans-serif;
        color: rgb(245, 245, 245);
        text-shadow: 0 0 2px rgb(245, 245, 245);
        font-size: ${props => (props.displayMode ? "42px" : "62px")};
        transition: font-size 0.2s;
      }
    }
    .heroText {
      h2,
      h3 {
        font-weight: lighter;
        color: white;
        font-size: 36px;
        width: 100%;
        text-align: center;
        padding: 5px;
        text-shadow: 0 0 1px rgb(240, 240, 240);

        span {
          color: #fcbf49;
          font-weight: normal;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .innerWrapper {
      .heroText {
        h2,
        h3 {
          font-size: 24px;
        }
      }
    }
  }
`;

const MoviesApp = ({ inputValue, handleClick, movies }) => {
  const handleSearch = e => {
    e.preventDefault();
    handleClick(inputValue);
  };

  return (
    <StyledWrapper displayMode={movies}>
      <div className="innerWrapper">
        <Logo displayMode={movies} />
        {!movies && (
          <>
            <div className="heroText">
              <h2>
                Nie wiesz w którym roku powstał <span>Twój</span> ulubiony film?
                <br />
                Sprawdź to!
              </h2>
            </div>
            <SearchSection handleSearch={handleSearch} />
          </>
        )}
        {movies && <DisplaySection />}
      </div>
    </StyledWrapper>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: inputValue => {
      if (inputValue !== "") {
        const key = "f086697e";
        fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&type=movie&s=${inputValue}`
        )
          .then(result => result.json())
          .then(data =>
            data.Response === "True"
              ? dispatch({ type: "FETCH_MOVIES", data: data.Search })
              : alert("Brak wyników, spróbuj ponownie.")
          )
          .catch(err => console.log(err));
      } else if (inputValue === "") {
        alert("Musisz wpisać tytuł szukanego filmu!");
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesApp);
