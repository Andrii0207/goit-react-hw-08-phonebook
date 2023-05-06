import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  align-items: center;
  margin-top: 70px;
`;

export const InputDataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

export const AddContactBtn = styled.button`
  display: block;
  width: 450px;
  height: 40px;
  border-radius: 5px;
  color: aliceblue;
  font-size: 20px;
  font-weight: 600;
  background-color: rgb(167, 167, 167);
  margin-top: 20px;

  &:hover,
  &:focus {
    background-color: rgb(246, 187, 99);
    color: black;
    scale: 1.05;
  }
`;

export const LabelName = styled.label`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const InputName = styled.p`
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  margin: 5px 5px;

  /* display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 300;
  font-style: italic; */
`;

export const InputData = styled.input`
  width: 200px;
  height: 30px;
`;
