import { createSelector } from "@reduxjs/toolkit";
import { getFilterName } from "../filters/selectors";

export const getContacts = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;
export const getFilteredContacts = createSelector(
  [getContacts, getFilterName],
  (contacts, filterValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
