import React from 'react'

import {SearchInput, SearchContainer} from './style'
import Divider from '@material-ui/core/Divider';

const SearchBar = ({ state, dispatch }) => {

    const onChange = ({ target }) => {
        dispatch(target.value);
    };

    return (
        <React.Fragment>
            <SearchContainer data-testid="SearchContainer">
                <SearchInput 
                size="small" 
                fullWidth 
                autoComplete="off"
                id="outlined-basic" 
                label="" 
                placeholder="Search" 
                variant="outlined"
                value={state || ''}
                onChange={onChange}
                />
            </SearchContainer>
            <Divider />
        </React.Fragment>
    )
}

export default SearchBar