import styled from "styled-components";

export const Content = styled.div`
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ContentLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 70%;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Title = styled.h2``;

export const ID = styled.p``;

export const ButtonDelete = styled.button`
  padding: 8px;
  border-radius: 10px;
  background-color: #ff495a;
  color: #fefefe;

  :hover {
    background-color: #ca3744;
  }
`;
