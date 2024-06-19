import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormContainer = styled.form`
  margin-top: 12vh;
  padding: 0 40px;
  height: 20vh;
`

export const StyledAddInput = styled.input`
  display: block;
  padding: 8px;
  border: 2px groove ${variables.softblue};
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
  width: 50%;
`
export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
    margin-top: 16px;
  }

  label {
    margin-right: 3px;
  }

  input {
    margin-left: 6px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Badge = styled.button`
  height: 64px;
  width: 240px;
  background-color: ${variables.wintergreen};
  color: rgba(240, 240, 240, 0.8);
  border: 3px groove ${variables.wintergreen};
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    border: 3px groove ${variables.wintergreen_transparent};
    transform: translateY(4px);
  }
`
