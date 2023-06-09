import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomeUser = styled.p`
  margin-right: 20px;
  font-weight: 500;
  font-size: 20px;
`;

export const LogOutBTN = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  font-weight: 500;
  font-size: 17px;

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
