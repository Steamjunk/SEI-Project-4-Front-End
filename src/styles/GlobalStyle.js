import Styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: lemonchiffon;
  }

  a {
    color: #1f1300;
    text-decoration: none
  }
  a:visited {
    color: black;
  }  
`

export const Bold = Styled.span`
    font-weight: bold;
`