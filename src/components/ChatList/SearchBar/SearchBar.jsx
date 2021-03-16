import React, { useState } from 'react'

import {SearchInput, SearchContainer} from './SearchBarStyle'
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider';

const SearchBar = ({ state, dispatch }) => {

    const [searchBackgroundState, setSearchBackgroundState] = useState(false)
    const onChange = ({ target }) => {
        dispatch(target.value);
    }

    const onFocus = ({ target }) => {
        setSearchBackgroundState(true)
    }

    const onBlur = ({ target }) => {
        setSearchBackgroundState(false)
    }

    return (
        <React.Fragment>
            <SearchContainer toggleBackground={state ? true : searchBackgroundState} data-testid="SearchContainer">
                <SearchInput 
                size="small" 
                fullWidth 
                disableUnderline
                autoComplete="off"
                type="text" 
                placeholder="Search"
                value={state || ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
            </SearchContainer>
            <Divider />
        </React.Fragment>
    )
}

export default SearchBar