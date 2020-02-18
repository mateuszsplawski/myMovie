import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled.section`
  width: 100vw;

  form {
    width: 50vw;
    margin: 5vh auto;
    position: relative;
    display: flex;
    bottom: 15px;

    input {
      background: rgba(120, 120, 120, 50%);
      width: 100%;
      color: white;
      padding: 10px;
      font-size: 24px;
      border: 2px solid grey;
      border-radius: 15px;
      border-right: none;
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      outline: none;

      ::placeholder {
        color: rgb(230, 230, 230);
        font-weight: lighter;
      }

      :valid {
        border-color: #fcbf49;
        & + button {
          border-color: #fcbf49;
        }
      }

      :focus {
        border-color: #fcbf49;

        & + button {
          border-color: #fcbf49;
        }
      }
    }

    button {
      background: transparent;
      border: 2px solid grey;
      color: white;
      border-left: none;
      border-radius: 15px;
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
      padding: 5px 20px;
      font-size: 24px;
      cursor: pointer;
      outline: none;

      :hover {
        color: #fcbf49;
      }
    }

    @media (max-width: 750px) {
      width: 75vw;
    }

    @media (max-width: 700px) {
      input,
      button {
        font-size: 20px;
      }
    }

    @media (max-width: 500px) {
      input,
      button {
        font-size: 16px;
      }
    }

    @media (max-width: 400px) {
      width: 85vw;
    }
  }
`;

const SearchSection = ({ searchedMovie, setSearchedMovie, handleSearch }) => {
  return (
    <>
      <StyledWrapper>
        <form>
          <input
            required
            value={searchedMovie}
            onChange={e => setSearchedMovie(e.target.value.toUpperCase())}
            type="text"
            placeholder="Wpisz tytuł szukanego filmu..."
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </StyledWrapper>
    </>
  );
};

export default SearchSection;
