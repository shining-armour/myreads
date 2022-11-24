import PropTypes from "prop-types"
import BookItem from "./BookItem";

const BookShelf = ({shelfTitle, booksList, updateUserBooks}) => {

  const bookItems = booksList.length > 0 ? booksList.map((book) => {
    return <BookItem key={book.id} Book={book} bookShelfArray={[book]} updateUserBooks={updateUserBooks}/>
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
  booksList:PropTypes.array.isRequired,
  updateUserBooks: PropTypes.func.isRequired
}

export default BookShelf;