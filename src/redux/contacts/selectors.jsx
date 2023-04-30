export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;

// export const selectSortedContacts = state => {
//   const contacts = selectContacts(state);

//   console.log('selectSortedContacts123', contacts);
//   [...contacts].sort((a, b) => a.name.localeCompare(b.name));
// };
