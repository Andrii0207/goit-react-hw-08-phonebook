import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
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
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
