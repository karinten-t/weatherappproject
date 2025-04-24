import React from 'react';
  
function SearchBar({search, setSearch,onSearch}) {
   
    return (
    <>
     <div className='search'>search</div>
        <input type="text"
        placeholder='Enter location...'
        value={search}
        onChange ={(e) =>setSearch(e.target.value)} />

        <button onClick={onSearch}>Search</button>
    
  
    </>
)
}

export default SearchBar