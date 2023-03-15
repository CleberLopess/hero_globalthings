import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
`;

export const Content = styled.div`
  height: fit-content;
  background-color: #fefefe;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: auto !important;
  border-radius: 10px;
`;

export const ButtonClose = styled.button`
  margin: 0 0 20px auto;
  font-size: 1.5em;
  background-color: transparent;
`;

export const Children = styled.div`
  margin: auto;
`;
