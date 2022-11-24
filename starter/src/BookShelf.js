import PropTypes from "prop-types"
import BookItem from "./BookItem";

const BookShelf = ({ shelfTitle, shelfBooks, updateUserShelfBooks }) => {

  const bookItems = shelfBooks.length > 0 ? shelfBooks.map((book) => {
    return <BookItem key={book.id} book={book} bookShelfArray={[book]} updateUserShelfBooks={updateUserShelfBooks}/>
  }) : <li>{`No books present in ${shelfTitle} shelf`}</li>

  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">{bookItems}</ol>
    </div>
  </div>
  );
}

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  shelfBooks: PropTypes.array.isRequired,
  updateUserShelfBooks: PropTypes.func.isRequired
}

export default BookShelf;