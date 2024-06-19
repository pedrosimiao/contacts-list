import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/Contact'
import { Btn } from '../../styles'

type ContactTagProps = {
  category?: enums.Category
  group?: enums.Group
  guideline: 'category' | 'group'
}

function returnBackgroudColor(props: ContactTagProps): string {
  if (props.guideline === 'category') {
    if (props.category === enums.Category.REGULAR)
      return variables.bluecuracao_transparent2
    if (props.category === enums.Category.FAVORITE)
      return variables.wintergreen_transparent
  } else {
    if (props.group === enums.Group.FAMILY) return variables.wintergreen
    if (props.group === enums.Group.FRIENDS) return variables.bluecuracao
    return variables.purplecorallite
  }

  return variables.yellow_summertime
}

export const ContactCard = styled.div`
  background-color: ${variables.purplecorallite_transparent};
  box-shadow: 0px, 4px, 4px, rgba(0, 0, 0, 0.25);
  padding: 24px;
  border: 3px groove ${variables.purplecorallite};
  border-radius: 32px;
  color: #fff;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-right: 40px;
  margin-left: 40px;
`

export const ContactName = styled.input`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  background-color: transparent;
  border: none;
  color: #fff;
`

export const ContactTag = styled.span<ContactTagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnBackgroudColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-top: 4px;
`

export const ContactEmail = styled.input`
  display: block;
  background-color: transparent;
  font-weight: bold;
  margin-bottom: 12px;
  border: none;
  width: 40%;
  color: #fff;
`
export const ContactPhone = styled.input`
  display: block;
  background-color: transparent;
  width: 20%;
  font-weight: bold;
  border: none;
  color: #fff;
`
export const ContactActionBar = styled.div`
  padding-top: 16px;
`

export const BtnSave = styled(Btn)`
  background-color: ${variables.wintergreen};
  border: 3px groove ${variables.wintergreen};
`

export const BtnCancelRemove = styled(Btn)`
  background-color: ${variables.red_tygerlily};
  border: 3px groove ${variables.red_tygerlily};
`

export const StyledPhoneInput = styled.div`
  .react-tel-input .form-control {
    background-color: transparent;
    border: 3px groove #ccc;
    font-weight: bold;
    color: #fff;
  }
`
