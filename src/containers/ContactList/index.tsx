import { useSelector } from 'react-redux'

import Contact from '../../components/Contact'
import { MainContainer } from '../../styles/index'

import { RootReducer } from '../../store'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { query, guideline, extractedValue } = useSelector(
    (state: RootReducer) => state.filter
  )

  const contactFilter = () => {
    let filteredContacts = items
    if (query !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase()) ||
          item.phone.toLowerCase().includes(query.toLowerCase())
      )

      if (guideline === 'category') {
        filteredContacts = filteredContacts.filter(
          (item) => item.category === extractedValue
        )
      } else if (guideline === 'group') {
        filteredContacts = filteredContacts.filter(
          (item) => item.group === extractedValue
        )
      }

      return filteredContacts
    } else {
      return items
    }
  }

  return (
    <MainContainer>
      <ul>
        {contactFilter().map((c) => (
          <li key={c.name}>
            <Contact
              id={c.id}
              name={c.name}
              category={c.category}
              group={c.group}
              email={c.email}
              phone={c.phone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
