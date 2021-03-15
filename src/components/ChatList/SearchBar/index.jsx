import React from 'react'

import {SearchInput} from './style'
import Search from '@material-ui/icons/Search'

const SearchBar = () => {

    return (
        <SearchInput placeholder={<Search /> + "Search"} />
    )
}

export default SearchBar