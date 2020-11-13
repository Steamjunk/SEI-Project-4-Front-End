import Styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  a {
    color: black;
    text-decoration: none
  }
  a:visited {
    color: black;
  }  
`

export const Bold = Styled.span`
    font-weight: bold;
`