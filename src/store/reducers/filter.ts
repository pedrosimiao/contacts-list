import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Contact'

type FilterState = {
  query?: string
  guideline: 'category' | 'group' | 'all'
  extractedValue?: enums.Category | enums.Group
}

const initialState: FilterState = {
  query: '',
  guideline: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.guideline = action.payload.guideline
      state.extractedValue = action.payload.extractedValue
    }
  }
})

export const { changeQuery, changeFilter } = filterSlice.actions

export default filterSlice.reducer
