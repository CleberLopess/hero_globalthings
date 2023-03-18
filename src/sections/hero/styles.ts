import styled from "styled-components";

interface IProp {
  active?: boolean;
}

export const Content = styled.section`
  background-color: #fefefe;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px !important;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const ButtonEdited = styled.button`
  padding: 8px;
  border-radius: 5px;
  background-color: #ffff00;

  :hover {
    background-color: #caca04;
  }
`;

export const ButtonExclued = styled.button`
  padding: 8px;
  border-radius: 5px;
  background-color: #ff0000;
  color: #fefefe;

  :hover {
    background-color: #af0404;
  }
`;

export const Image = styled.img`
  display: flex;
  margin: auto;
`;

export const Name = styled.h1`
  font-size: 3em;
  text-align: center;
  text-transform: uppercase;
`;

export const ContentDescriptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IDHero = styled.p`
  font-size: 1.5em;
  color: #0000ff;
  text-transform: uppercase;
`;

export const IDCategory = styled.p`
  font-size: 1.5em;
  color: #008000;
  text-transform: uppercase;
`;

export const Category = styled.p`
  font-size: 1.5em;
  color: #008000;
  text-transform: uppercase;
`;

//Styles modal
export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleForm = styled.h2`
  font-size: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const TitleInput = styled.h4`
  font-size: 1.2em;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  transition: all 0.5s ease-in;

  :focus {
    outline: none;
    transition: all 0.5s ease-in;
  }

  :checked {
    cursor: pointer;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  width: 100%;
  background-color: transparent;
  height: 100%;
`;

export const Options = styled.option``;

export const ContentButtonsModal = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonSaved = styled.button`
  padding: 8px;
  border-radius: 10px;
  background-color: #54d373;
  color: #fefefe;

  :hover {
    background-color: #36924c;
  }
`;

export const ButtonCancel = styled.button`
  padding: 8px;
  border-radius: 10px;
  background-color: #ff495a;
  color: #fefefe;

  :hover {
    background-color: #ca3744;
  }
`;

export const Tag = styled.div<IProp>`
  background-color: ${({ active }) => (active ? "#54d373" : "#ff495a")};
  display: flex;
  margin: 0 0 auto auto;
  border-radius: 8px;
  padding: 5px;
  color: #fefefe;
`;
