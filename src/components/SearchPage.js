import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import * as S from '../styles/SearchPageStyles';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            set: '',
            white: 'False',
            blue: 'False',
            black: 'False',
            green: 'False',
            red: 'False',
            colorless: 'False',
            supertype: 'Any',
            type: 'Any',
            subtype: 'Any'
        }
    }

    handleInputChange = (e) => {
        let inputValue;
        if (e.target.type === 'checkbox') {
            if (e.target.checked === true) {
                inputValue = 'True'
            } else {
                inputValue = 'False'
            }
        } else {
            inputValue = e.target.value
        }

        this.setState({
            [e.target.name]: inputValue
        });
    }

    render() {
        return (
            <S.SearchPage>
                <SearchForm
                    searchParameters={this.state}
                    handleInputChange={this.handleInputChange}
                />
                <SearchResults
                    searchParameters={this.state}
                />
            </S.SearchPage>
        )
    }
}

export default SearchPage