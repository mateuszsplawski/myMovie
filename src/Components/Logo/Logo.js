import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.header`
  ${props => (props.position ? undefined : "align-self: flex-start;")}
  h1 {
    font-family: "Exo", sans-serif;
    color: rgb(245, 245, 245);
    text-shadow: 0 0 2px rgb(245, 245, 245);
    font-size: ${props => (props.displayMode ? "42px" : "62px")};
    transition: font-size 0.2s;
  }
`;

const Logo = ({ displayMode, position }) => {
  return (
    <StyledWrapper displayMode={displayMode} position={position}>
      <h1>mo.vie</h1>
    </StyledWrapper>
  );
};

export default Logo;
