import styled, { keyframes } from "styled-components";

export const animationForm = keyframes`
  0%   { top: -10px; opacity: 0%;}
  50%  { top: -5px; opacity: 50%;}
  100% { top: 0px; opacity: 100%;}
  `;

export const Wrapper = styled.div`
  background-image: url("images/main_BG.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  background-color: #fefefe;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  border-radius: 8px;
  padding: 20px;
  animation: 0.8s linear ${animationForm};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const TitleInput = styled.h4``;
export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  transition: all 0.5s ease-in;

  :focus {
    border-color: #6600f2;
    outline: none;
    transition: all 0.5s ease-in;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #6600f2;
  color: #fefefe;
  transition: all 0.2s ease-in;

  :hover {
    background: #4e08ad;
    transition: all 0.2s ease-in;
  }

  :focus {
    border-color: none;
    outline: none;
    background: #4e08ad;
  }
`;

export const Continue = styled.a`
  color: blue;
`;
