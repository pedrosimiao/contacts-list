import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      name: 'Mario',
      category: enums.Category.FAVORITE,
      group: enums.Group.FAMILY,
      email: 'itsame@wahoo.com',
      phone: '+ 39 929-55-MARIO',
      id: 1
    },
    {
      name: 'The dude',
      category: enums.Category.FAVORITE,
      group: enums.Group.FRIENDS,
      email: 'wellyeahthatsjustyouropinionman@zen.com',
      phone: '+ 1 (696) 9696969',
      id: 2
    },
    {
      name: 'D. B. Cooper',
      category: enums.Category.REGULAR,
      group: enums.Group.WORK,
      email: 'dbcooper@googolplex.com',
      phone: '+55 (??) ?????-????',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    update: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index >= 0) {
        state.items[index] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existingContact = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (existingContact) {
        alert(
          'Contact already in list. Please try a different name for your contact'
        )
      } else {
        const lastContact = state.items[state.items.length - 1]

        const nextContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(nextContact)
      }
    }
  }
})

export const { remove, update, register } = contactsSlice.actions

export default contactsSlice.reducer
