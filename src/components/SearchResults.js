import React, { useState, useEffect } from 'react';

import SearchResultCard from './SearchResultCard'
import * as S from '../styles/SearchPageStyles';


const SearchResults = (props) => {
    const [searchResults, setSearchResults] = useState(null)

    const callAPI = () => {
        fetch(buildUrl())
            .then(res => res.json())
            .then(res => {
                setSearchResults(res)
            });
    }

    const buildUrl = () => {
        let searchUrl = 'http://localhost:9000/cards/'

        if (props.searchParameters.name) {
            searchUrl = searchUrl + `${props.searchParameters.name}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.set) {
            searchUrl = searchUrl + `${props.searchParameters.set}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.white) {
            searchUrl = searchUrl + `${props.searchParameters.white}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.blue) {
            searchUrl = searchUrl + `${props.searchParameters.blue}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.black) {
            searchUrl = searchUrl + `${props.searchParameters.black}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.green) {
            searchUrl = searchUrl + `${props.searchParameters.green}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.red) {
            searchUrl = searchUrl + `${props.searchParameters.red}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.colorless) {
            searchUrl = searchUrl + `${props.searchParameters.colorless}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.supertype) {
            searchUrl = searchUrl + `${props.searchParameters.supertype}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.type) {
            searchUrl = searchUrl + `${props.searchParameters.type}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        if (props.searchParameters.subtype) {
            searchUrl = searchUrl + `${props.searchParameters.subtype}/`
        } else {
            searchUrl = searchUrl + `null/`
        }
        console.log(searchUrl)

        return searchUrl
    }

    useEffect(() => {
        callAPI();
    }, [props.searchParameters]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <S.SearchResults>
            {searchResults
                ?
                <div>
                    <S.SearchHeader>Search Results</S.SearchHeader>
                    <S.ResultInfo>Found {searchResults.length} cards</S.ResultInfo> 
                    <S.ResultsList>
                        {searchResults.map((card, index) => {
                            if(card.imageUrl) {
                                return <SearchResultCard card={card} key={index} />
                            }
                        })}
                    </S.ResultsList>

                </div>

                : "waiting for API..."}
        </S.SearchResults>
    )
}

export default SearchResults