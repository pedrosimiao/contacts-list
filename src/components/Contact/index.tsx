import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Btn } from '../../styles'

import { remove, update } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'

type Props = ContactClass

const Contact = ({ name, category, group, email, phone, id }: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const [editedEmail, setEditedEmail] = useState(email)
  const [editedPhone, setEditedPhone] = useState(phone)

  const handleSave = () => {
    dispatch(
      update({
        id,
        name: editedName,
        email: editedEmail,
        phone: editedPhone,
        category,
        group
      })
    )
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedName(name)
    setEditedEmail(email)
    setEditedPhone(phone)
    setIsEditing(false)
  }

  return (
    <S.ContactCard>
      {isEditing ? (
        <S.ContactName
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          placeholder="Name"
        />
      ) : (
        <S.ContactName type="text" value={editedName} readOnly />
      )}

      <S.ContactTag guideline="category" category={category}>
        {category}
      </S.ContactTag>
      <S.ContactTag guideline="group" group={group}>
        {group}
      </S.ContactTag>

      {isEditing ? (
        <>
          <S.ContactEmail
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            placeholder="e-mail"
          />
          <S.StyledPhoneInput>
            <PhoneInput
              country={'us'}
              value={editedPhone}
              onChange={(phone) => setEditedPhone(phone)}
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
          </S.StyledPhoneInput>
        </>
      ) : (
        <>
          <S.ContactEmail value={editedEmail} type="email" readOnly />
          <S.ContactPhone value={editedPhone} readOnly />
        </>
      )}

      <S.ContactActionBar>
        {isEditing ? (
          <>
            <S.BtnSave onClick={handleSave}>Save</S.BtnSave>
            <S.BtnCancelRemove onClick={handleCancel}>Cancel</S.BtnCancelRemove>
          </>
        ) : (
          <>
            <Btn onClick={() => setIsEditing(true)}>Edit</Btn>
            <S.BtnCancelRemove onClick={() => dispatch(remove(id))}>
              Remove
            </S.BtnCancelRemove>
          </>
        )}
      </S.ContactActionBar>
    </S.ContactCard>
  )
}

export default Contact
