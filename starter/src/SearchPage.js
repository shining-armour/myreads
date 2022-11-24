import { Link } from "react-router-dom" 
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import BookItem from "./BookItem"
import * as BooksAPI from "./BooksAPI"

const SearchPage = ({ userShelfBooks, updateUserShelfBooks }) => {

  const [searchResultBooks, setSearchResultBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {

    let isMounted = true
      const getSearchResultBooks = async() => {
        if(searchQuery !== "") {
          const result = await BooksAPI.search(searchQuery, 20)
          result.error ? setSearchResultBooks([]) : setSearchResultBooks(result)
        } else {
          setSearchResultBooks([])
        }
      }

      if(isMounted) getSearchResultBooks()

      return () => {
        isMounted = false
        setSearchResultBooks([])
      }
    }, [searchQuery])


  const updateSearchQuery = (newQuery) => {
    setSearchQuery(newQuery)
  }

  const searchedBooks =  searchQuery !== "" ? searchResultBooks.length !== 0 ? searchResultBooks.map((searchBook) => {
    const bookShelfArray = userShelfBooks.filter((userBook) => userBook.id === searchBook.id)
    return <BookItem key={searchBook.id} book={searchBook} bookShelfArray={bookShelfArray} updateUserShelfBooks={updateUserShelfBooks} />
  }) : <li>No matches found!!</li> : ""  

  return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to={"/"} className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">{searchedBooks}</ol>
          </div>
        </div>
      );
}

SearchPage.propTypes = {
  userShelfBooks: PropTypes.array.isRequired,
  updateUserShelfBooks: PropTypes.func.isRequired
}


export default SearchPage;