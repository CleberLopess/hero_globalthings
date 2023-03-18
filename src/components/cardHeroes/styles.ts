import styled from "styled-components";

interface IProp {
  active?: boolean;
}

export const Content = styled.div`
  background-color: #fefefe;
  border-radius: 10px;
  padding: 10px;

  width: 285px;
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
  color: #0000ff;
`;

export const CategoryId = styled.p`
  color: #008000;
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 280px;
`;

export const Name = styled.h2`
  font-size: 1.2em;
  text-transform: uppercase;
`;

export const Active = styled.p<IProp>`
  background-color: ${({ active }) => (active ? "#54d373" : "#ff495a")};
  display: flex;
  margin: 0 0 0 auto;
  border-radius: 8px;
  padding: 5px;
  color: #fefefe;
`;
