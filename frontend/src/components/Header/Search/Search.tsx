import React, {useState} from 'react';
import {NameSite} from "../../../api/api";

const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <input placeholder={`Search ${NameSite}`}
               value={search}
               onChange={e => setSearch(e.target.value)}
               type='text' className='header-in-search'/>
    );
};

export default Search;