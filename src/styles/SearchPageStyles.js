import Styled from "styled-components";

export const SearchPage = Styled.header`
   display: flex;
   flex-flow: column nowrap;
`

export const SearchForm = Styled.form`
    background: #d0b88b;
    display: flex;
    flex-flow: row nowrap;
    border: solid 2px #1F1300;
    border-radius: 10px;
    justify-content: space-between;
    margin: 20px auto;
    padding: 10px;
    width: 60vw;
`

export const SearchFormContainer = Styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 30%;
    align-items: center;
    padding: 10px;
`

export const ColorContainer = Styled.div`
    width: 50%;
`


export const SearchResults =Styled.div`
    background: lemonchiffon;
    width: 100%;
    margin: 0 auto;
`

export const SearchHeader = Styled.h2`
    margin: 0;
    text-align: center;
`
    
export const ResultInfo = Styled.p`
    text-align: center;
`

export const ResultsList = Styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding-inline-start: 0px;
`

export const ResultCard = Styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 30%;
    background: #BAF3EC;
    padding: 10px;
    margin: 5px;
    border: solid 2px #1F1300;
    border-radius: 10px;
`

export const ResultCardArt = Styled.img`
    width: 250px;
    height: 350px;
    &:hover {
        opacity: 70%;
    }
`

export const CardInfo = Styled.div`
    padding: 10px;
    width: 60%;
`