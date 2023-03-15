import styled from "styled-components";

interface IProp {
  active: boolean;
}

export const Content = styled.div`
  background-color: #ffff;
  border-radius: 10px;

  max-width: 300px;
  padding: 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  transition: all 0.2s ease-in;

  :hover {
    box-shadow: 2px 2px 7px -1px;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
`;

export const ContentId = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroesId = styled.p`
  color: blue;
`;

export const CategoryId = styled.p`
  color: green;
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
`;

export const Name = styled.h2``;

export const Active = styled.p<IProp>`
  padding: 5px;
  background-color: ${({ active }) => (active ? "#54d373" : "#ff495a")};
  border-radius: 8px;
  width: fit-content;
  color: #ffff;
  margin: 0 0 0 auto;
`;
