import React from 'react';
import './Search.css';

function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search by owner name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default Search;