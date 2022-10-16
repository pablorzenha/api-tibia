import styled from "styled-components";

export const ListCreatures = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
  background-color: #79b77e87;
  border-radius: 8px;
  width: 90%;
  overflow-y: auto;
  padding: 12px;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    min-width: 150px;
    aspect-ratio: 1/1;
    text-align: center;
    background: white;
    border-radius: 10px;
    a {
      text-decoration: none;
      color: black;
      h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
      }
    }
  }
`;
