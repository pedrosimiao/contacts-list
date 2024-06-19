import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FilterTag from '../../components/FilterTag'

import * as S from './styles'

import * as enums from '../../utils/enums/Contact'

import { RootReducer } from '../../store'
import { changeQuery } from '../../store/reducers/filter'
import { Btn } from '../../styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { query } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <S.SearchInput
              type="text"
              placeholder="Search contact"
              value={query}
              onChange={(e) => dispatch(changeQuery(e.target.value))}
            />
            <S.Filters>
              <FilterTag
                extractedValue={enums.Category.FAVORITE}
                guideline="category"
                description="favorite"
              />
              <FilterTag
                extractedValue={enums.Category.REGULAR}
                guideline="category"
                description="regular"
              />
              <FilterTag
                extractedValue={enums.Group.FAMILY}
                guideline="group"
                description="family"
              />
              <FilterTag
                extractedValue={enums.Group.FRIENDS}
                guideline="group"
                description="friends"
              />
              <FilterTag
                extractedValue={enums.Group.WORK}
                guideline="group"
                description="work"
              />
              <FilterTag guideline="all" description="all" />
            </S.Filters>
          </>
        ) : (
          <Btn onClick={() => navigate('/')} type="button">
            Back to contacts list
          </Btn>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
