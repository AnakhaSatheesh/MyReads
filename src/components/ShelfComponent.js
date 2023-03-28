import React from 'react'
import BookComponent from './BookComponent'

const ShelfComponent = ({updateBooks, bookShelf, books}) => {
    let booksToDisplay =(!books)?'': books.map(book => <BookComponent key={book.id} book={book} updateBooks={updateBooks}/>)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelf}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">        
                {booksToDisplay}
            </ol>
            </div>
        </div>
      )
}

export default ShelfComponent