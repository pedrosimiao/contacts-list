import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variables from '../../styles/variables'

export const Badge = styled(Link)`
  height: 80px;
  width: 160px;
  background-color: ${variables.wintergreen};
  color: rgba(240, 240, 240, 0.8);
  border: 3px groove ${variables.wintergreen};
  border-radius: 24px;
  position: fixed;
  bottom: 64px;
  right: 64px;
  font-size: 24px;
  font-weight: bold;
  opacity: 0.95;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 3px groove ${variables.wintergreen_transparent};
    transform: translate3d(4px);
  }
`
