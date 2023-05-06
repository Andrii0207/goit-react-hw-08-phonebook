import styled from 'styled-components';

export const RegisterBTN = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  font-weight: 500;
  font-size: 17px;
  width: 320px;
  margin: auto;

  &.active {
    color: orangered;
    background: lightgrey;
  }

  &:hover,
  &:focus {
    background: rgb(200, 200, 200);
    color: orangered;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  /* margin: 5px 5px; */

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Form = styled.form`
  width: 320px;
  margin: auto;
  margin-top: 100px;
`;

export const InputDataLogIn = styled.input`
  font-size: 20px;
  font-weight: 500;
  height: 32px;
`;
