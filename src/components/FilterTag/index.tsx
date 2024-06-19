import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Contact'
import { changeFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export type Props = {
  description: string
  guideline: 'category' | 'group' | 'all'
  extractedValue?: enums.Category | enums.Group
}
const FilterTag = ({ description, guideline, extractedValue }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const checkIfActive = () => {
    const sameGuideline = filter.guideline === guideline
    const sameExtractedValue = filter.extractedValue === extractedValue

    return sameGuideline && sameExtractedValue
  }

  const countContacts = () => {
    if (guideline === 'all') return contacts.items.length
    if (guideline === 'category') {
      return contacts.items.filter((item) => item.category === extractedValue)
        .length
    }
    if (guideline === 'group') {
      return contacts.items.filter((item) => item.group === extractedValue)
        .length
    }
  }

  const filtering = () => {
    dispatch(
      changeFilter({
        guideline,
        extractedValue
      })
    )
  }

  const counter = countContacts()
  const active = checkIfActive()

  return (
    <S.Tag active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{description}</S.Label>
    </S.Tag>
  )
}

export default FilterTag
