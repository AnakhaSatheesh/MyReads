import "./App.css";
import { useEffect, useState } from "react";
import ShelfComponent from "./components/ShelfComponent";
import { getAll,update } from "./BooksAPI";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [currentlyReading, setCurrentlyReading]= useState([]);
  const [wantToRead, setWantToread] = useState([]);
  const [read, setRead] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const userList = async () =>{
    try{
      const allBooks = await getAll();
      console.log(allBooks)
      setAllBooks(allBooks);
      setCurrentlyReading(allBooks.filter((book)=>book.shelf === "currentlyReading"));
      setWantToread(allBooks.filter((book) =>book.shelf === "wantToRead"));
      setRead(allBooks.filter((book) => book.shelf === "read"));

    }
    catch(error){

    }
  }
  useEffect(()=>{
    userList();
  }, [])

  const updateBooks = (book, shelf) =>{
    update(book, shelf).then((res) => {
      userList();
    });

  }
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchComponent
        updateBooks = {updateBooks}
        showSearchPage = {showSearchPage}
        setShowSearchpage = {setShowSearchpage}
        allBooks = {allBooks}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <ShelfComponent
                bookShelf = "Currently Reading" 
                updateBooks = {updateBooks}
                books = {currentlyReading}
              />
              
              <ShelfComponent
                bookShelf = "Want To Read" 
                updateBooks = {updateBooks}
                books = {wantToRead}
              />
              
              <ShelfComponent
                bookShelf = "Read" 
                updateBooks = {updateBooks}
                books = {read}
              />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
