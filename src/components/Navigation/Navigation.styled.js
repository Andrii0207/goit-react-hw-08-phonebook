import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(NavLink)`
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
    background: rgb(239, 235, 233);
    color: orangered;
  }
`;
