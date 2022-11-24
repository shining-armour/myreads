import { Link } from "react-router-dom" 
import BookShelf from "./BookShelf";
import Proptypes from "prop-types"

const MainPage = ({ userShelfBooks, updateUserShelfBooks }) => {
    
  const currentReadBooks = userShelfBooks.filter((book) => book.shelf === "currentlyReading")
  const wantToReadBooks = userShelfBooks.filter((book) => book.shelf === "wantToRead")
  const readBooks = userShelfBooks.filter((book) => book.shelf === "read")

  return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle="Currently Reading" shelfBooks={currentReadBooks} updateUserShelfBooks={updateUserShelfBooks}/>
            <BookShelf shelfTitle="Want to Read" shelfBooks={wantToReadBooks} updateUserShelfBooks={updateUserShelfBooks}/>
            <BookShelf shelfTitle="Read" shelfBooks={readBooks} updateUserShelfBooks={updateUserShelfBooks}/>
          </div>
        </div>
        <div className="open-search">
          <Link to={"/search"}>Add a book</Link>  
        </div>
      </div>
  );
}

MainPage.propTypes = {
  userShelfBooks: Proptypes.array.isRequired,
  updateUserShelfBooks: Proptypes.func.isRequired
}

export default MainPage;