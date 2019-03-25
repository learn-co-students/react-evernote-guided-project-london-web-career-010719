import React from 'react';

const Search = (props) => {
  return (
    <div onChange={props.handleChange} className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
