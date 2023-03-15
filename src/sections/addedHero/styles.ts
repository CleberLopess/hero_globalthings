import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 20px;
`;

export const ContentTitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleList = styled.h2``;

export const ButtonAdded = styled.button`
  border-radius: 4px;
  padding: 5px;
  background-color: #00a1ff;
  color: #fefefe;

  :hover {
    background-color: #0681c9;
  }
`;

export const ContentList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemList = styled.li``;

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

export const ContentButtons = styled.div`
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
