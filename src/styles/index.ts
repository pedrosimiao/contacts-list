import styled, { createGlobalStyle } from 'styled-components'
import bgImage from '../assets/images/bg2.jpg'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: "Nunito", sans-serif;
    list-style: none;

    body {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.3)
      ), url(${bgImage});
      background-repeat: no-repeat;
      background-position: auto;
      background-attachment: fixed;
      background-size: cover;
      overflow-y: hidden;
    }
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Btn = styled.button`
  padding: 8px 12px;
  margin-right: 12px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  background-color: ${variables.creamy_peach_transparent};
  border: 3px groove ${variables.yellow_summertime};
  border-radius: 12px;
  cursor: pointer;
`

export default GlobalStyle
