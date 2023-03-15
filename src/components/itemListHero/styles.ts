import styled from "styled-components";

interface IProp {
  active: boolean;
}

export const Content = styled.div`
  background-color: #fefefe;
  border-radius: 10px;
  padding: 10px;
  width: 100%;

  gap: 20px;
  display: flex;
  height: 100px;
  transition: all 0.2s ease-in;

  :hover {
    box-shadow: 2px 2px 7px -1px;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
`;

export const Image = styled.img`
  display: flex;
`;

export const ContentInfo = styled.div`
  display: flex;
  font-size: 1.2em;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentId = styled.div`
  display: flex;
  gap: 20px;
`;

export const NameHero = styled.h4`
  font-size: 1.2em;
  text-transform: uppercase;
`;

export const IDHero = styled.p`
  color: #0000ff;
`;

export const IDCategory = styled.p`
  color: #008000;
`;

export const TagActived = styled.div<IProp>`
  background-color: ${({ active }) => (active ? "#54d373" : "#ff495a")};
  display: flex;
  margin: 0 0 auto auto;
  border-radius: 8px;
  padding: 5px;
  color: #fefefe;
`;
