import { Link } from "react-router-dom" 
import BookShelf from "./BookShelf";
import Proptypes from "prop-types"

const MainPage = ({books, updateUserBooks }) => {
    
    const currentReadBooks = books.filter((book) => book.shelf === "currentlyReading")
    const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead")
    const readBooks = books.filter((book) => book.shelf === "read")

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle="Currently Reading" booksList={currentReadBooks} updateUserBooks={updateUserBooks}/>
            <BookShelf shelfTitle="Want to Read" booksList={wantToReadBooks} updateUserBooks={updateUserBooks}/>
            <BookShelf shelfTitle="Read" booksList={readBooks} updateUserBooks={updateUserBooks}/>
          </div>
        </div>
        <div className="open-search">
          <Link to={"/search"}>Add a book</Link>  
        </div>
      </div>
    );
}

MainPage.propTypes = {
  books: Proptypes.array.isRequired,
  updateUserBooks: Proptypes.func.isRequired
}

export default MainPage;