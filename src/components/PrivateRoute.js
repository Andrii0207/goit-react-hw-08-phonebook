import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import getAuthSelectors from 'redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getAuthSelectors.selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to="/login" /> : children;
};
