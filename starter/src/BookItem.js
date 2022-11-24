import PropTypes from "prop-types"
import ChangeBookShelfOptions from "./ChangeBookShelfOptions";

const BookItem = ({ book, bookShelfArray, updateUserShelfBooks }) => {

  const bookAuthors = book.authors?.map((a, index) => {
        return <span key={index}>{book.authors.length === 1 || index === book.authors.length - 1 ? a : `${a}, ` }</span>
    })

  const bookShelf = bookShelfArray.length > 0 ? bookShelfArray[0].shelf : "none"

  return (<li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${book.imageLinks?.thumbnail})`
               }}
            ></div>
            <ChangeBookShelfOptions bookShelf={bookShelf} updateUserShelfBooks={updateUserShelfBooks} book={book}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{bookAuthors}</div>
        </div>
      </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  bookShelfArray: PropTypes.array.isRequired,
  updateUserShelfBooks: PropTypes.func.isRequired
}

export default BookItem;