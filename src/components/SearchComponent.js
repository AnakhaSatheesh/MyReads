import React, { useEffect, useState } from 'react'
import { search } from '../BooksAPI';
import BookComponent from './BookComponent';

const SearchComponent = ({ updateBooks, setShowSearchpage, showSearchPage, allBooks }) => {
    const [searchResult, setSearchResult]=useState([]);
    const [formattedSearchResult, setFormattedsSearchResult] = useState("");

    useEffect(() => {
      let formSearchList = searchResult.map((searchBook)=>{
        let mappedBook = allBooks.find(allbook =>allbook.id === searchBook.id)
        searchBook.shelf = (mappedBook)? mappedBook.shelf: "none";

        return (<BookComponent key={searchBook.id} book={searchBook} updateBooks={updateBooks}/>)
      })

      setFormattedsSearchResult(formSearchList);
    }, [searchResult]);

    const handleOnChangeOfSearchText = (e) => {
        let searchQuery = e.target.value;
    
        if (searchQuery)
          search(searchQuery)
          .then((searchResult) => {
            
            if(searchResult.error)
              setSearchResult([]);
            else
              setSearchResult(searchResult)
              
          })
          .catch(e => console.log("erro", e));
        else
        setSearchResult([]);
      };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => setShowSearchpage(!showSearchPage)}> Close </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleOnChangeOfSearchText}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{formattedSearchResult}</ol>
      </div>
    </div>
  );
}

export default SearchComponent
