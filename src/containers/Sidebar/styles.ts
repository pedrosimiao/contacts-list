import { styled } from 'styled-components'
import variables from '../../styles/variables'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variables.purplecorallite_transparent2};
  border: 3px groove ${variables.purplecorallite};
  color: ${variables.purplecorallite};
  border-radius: 24px;
  margin-top: 20vh;
  margin-left: 24px;
  height: 60vh;
`

export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 3px solid ${variables.softblue};
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.7);
  height: 36px;
  width: 100%;
`

export const Filters = styled.div`
  display: block;
  margin-top: 16px;
`
