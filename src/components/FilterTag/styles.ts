import styled from 'styled-components'

import variables from '../../styles/variables'

type Props = {
  active: boolean
}

export const Tag = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  border: 3px groove
    ${(props) =>
      props.active ? variables.bluecuracao : variables.creamy_peach};
  color: ${(props) => (props.active ? '#eee' : variables.purplecorallite)};
  background-color: ${(props) =>
    props.active
      ? variables.bluecuracao_transparent
      : variables.creamy_peach_transparent};
  height: 36px;
  border-radius: 24px;
  cursor: pointer;
`

export const Counter = styled.div`
  font-weight: bold;
  font-size: 16px;
  display: inline;
  margin-right: 4px;
  margin-left: 4px;
`

export const Label = styled.div`
  font-size: 14px;
  display: inline;
`
