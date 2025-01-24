import React, { useState } from "react";
import { styled } from "styled-components";

export const Header = ({ handleClick, state }) => {
  return (
    <StyledHeader>
      <ButtonUsers onClick={handleClick}>
        {state ? "zapros" : "todo"}
      </ButtonUsers>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: aqua;
`;
const ButtonUsers = styled.button`
  width: 140px;
  height: 50px;
  background-color: red;
  border-radius: 7px;
`;
