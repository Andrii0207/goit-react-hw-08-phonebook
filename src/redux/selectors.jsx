export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const sortedContacts = state => {
  const contacts = selectContacts(state);
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};
