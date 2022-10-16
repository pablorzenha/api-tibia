import styled from "styled-components";

export const ContainerCreature = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #191616;
  button {
    position: absolute;
    top: 5px;
    left: 5px;
    border: none;
    background: none;
    color: #ccc;
    cursor: pointer;
    font-size: 18px;
  }
  div {
    background-color: #79b77e87;
    padding: 12px;
    border-radius: 8px;
  }
`;
