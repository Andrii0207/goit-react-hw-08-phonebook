const selectUserName = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

const getAuthSelectors = {
  selectUserName,
  selectIsLoggedIn,
};

export default getAuthSelectors;
