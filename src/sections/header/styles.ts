import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  padding: 10px;
  background-color: #ffff;
`;
export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1em;
  cursor: pointer;
`;
export const ContentButtons = styled.div`
  display: flex;
  gap: 5px;
`;
export const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  color: #ffff;
  background-color: #fe5a5a;

  :hover,
  :focus {
    background-color: #b93030;
  }
`;
