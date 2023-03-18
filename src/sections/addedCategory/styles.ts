import styled from "styled-components";

export const Content = styled.section`
  background-color: #fefefe;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 10px !important ;
  border-radius: 10px;
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
`;

export const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #bfbfbf;
  padding-bottom: 40px;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleInput = styled.h4`
  font-size: 1.4em;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;

  :focus {
    outline: none;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 10px;
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

export const ContentCardCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
