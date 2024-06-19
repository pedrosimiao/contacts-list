import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Contact'

import { ContactCard, StyledPhoneInput } from '../../components/Contact/styles'
import {
  StyledAddInput,
  Options,
  Option,
  Badge,
  BadgeContainer,
  FormContainer
} from './styles'

import { register } from '../../store/reducers/contacts'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState(enums.Category.REGULAR)
  const [group, setGroup] = useState(enums.Group.FAMILY)

  const registerContact = (ev: FormEvent) => {
    ev.preventDefault()

    dispatch(
      register({
        name,
        category,
        group,
        email,
        phone
      })
    )
    navigate('/')
  }

  return (
    <FormContainer onSubmit={registerContact}>
      <ContactCard>
        <StyledAddInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <StyledAddInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <StyledPhoneInput>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            preferredCountries={[
              'us',
              'br',
              'gb',
              'ca',
              'au',
              'de',
              'fr',
              'it',
              'es',
              'mx',
              'jp',
              'cn',
              'in',
              'ru'
            ]}
          />
        </StyledPhoneInput>
        <Options>
          <p>Category</p>
          {Object.values(enums.Category).map((category) => (
            <Option key={category}>
              <input
                value={category}
                name="category"
                type="radio"
                onChange={(e) => setCategory(e.target.value as enums.Category)}
                id={category}
              />{' '}
              <label htmlFor={category}>{category}</label>
            </Option>
          ))}
        </Options>
        <Options>
          <p>Group</p>
          {Object.values(enums.Group).map((group) => (
            <Option key={group}>
              <input
                value={group}
                name="group"
                type="radio"
                onChange={(e) => setGroup(e.target.value as enums.Group)}
                id={group}
              />{' '}
              <label htmlFor={group}>{group}</label>
            </Option>
          ))}
        </Options>
        <BadgeContainer>
          <Badge type="submit">Add new contact</Badge>
        </BadgeContainer>
      </ContactCard>
    </FormContainer>
  )
}

export default Form
