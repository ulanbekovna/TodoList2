import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Zapros = () => {
  const [users, setUsers] = useState([]);
  

  async function getUsers() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      const data = await response.json();
      console.log(data.results);

      setUsers(data.results);
    } catch (error) {
      throw new Error(error);
    }
  }
  const handleTernary = () => {};

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <GlobalStyle>
      {users.map((item) => (
        <div>
          <img src={item.image} />
          <div className="div">
            <h1>{item.name}</h1>

            <i onSubmit={handleTernary()}>{item.species}</i>
            <b>{item.gender}</b>
          </div>
        </div>
      ))}
    </GlobalStyle>
  );
};
const GlobalStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .div {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    color: white;
    display: flex;
    flex-direction: column;
  }
`;
