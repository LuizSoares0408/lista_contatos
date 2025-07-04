export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ContactsState {
  items: Contact[];
}