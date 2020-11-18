import Styled from "styled-components";

export const StyledDeckPage = Styled.div`
    width: 80vw;
    margin: 0 auto;
`

export const StyledDeckBox = Styled.div`
    border: solid 2px #1F1300;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    background: #FEDC97;
    width: 40vw;
`

export const DeckPageContainer = Styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-around;
`

export const NewDeckForm = Styled.form`
    border: solid 2px #1F1300;
    border-radius: 10px;
    padding: 10px;
    margin-top: 60px;
    display: flex;
    flex-flow: column wrap;
    width: 30vw;
    background: #FEDC97;
`

export const StyledInput = Styled.input`
    margin: 5px;
`

export const StyledLabel = Styled.label`
    margin: 5px;
    
`

export const DeckCardContainer = Styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding-inline-start: 0px;
`

export const DeckTitle = Styled.h1`
    margin: 15px;
    text-align: center;
    
`

export const DeckInfoText = Styled.p`
    text-align: center;
`

