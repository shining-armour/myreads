import {Link} from "react-router-dom" 
import {useState, useEffect} from "react"
import PropTypes from "prop-types"
import BookItem from "./BookItem"
import * as BooksAPI from"./BooksAPI"

const SearchPage = ({userBooks, updateUserBooks}) => {

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

   useEffect(() => {
      
    let isMounted = true;

      const getSearchResults = async() => {
        if(searchQuery!=="") {
          const result = await BooksAPI.search(searchQuery, 20)
          result.error ? setSearchResults([]) :setSearchResults(result)
        } else {
          setSearchResults([])
        }
      }

      if(isMounted) getSearchResults()
  
      return () => {
        isMounted = false
      }

    }, [searchQuery])

  const updateSearchQuery = (newQuery) => {
    setSearchQuery(newQuery)
  }

  const searchedBooks =  searchQuery !== "" ? searchResults.length !== 0 ? searchResults.map((book) => {
    const bookShelfArray = userBooks.filter((userBook) => userBook.id === book.id)
    return <BookItem key={book.id} Book={book} bookShelfArray={bookShelfArray} updateUserBooks={updateUserBooks} />
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
  userBooks: PropTypes.array.isRequired,
  updateUserBooks: PropTypes.func.isRequired
}


export default SearchPage;