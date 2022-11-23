import PropTypes from "prop-types"
import ChangeBookShelfOptions from "./ChangeBookShelfOptions";

const BookItem = ({Book, bookShelfArray, updateUserBooks}) => {

    const bookAuthors = Book.authors?.map((a, index) => {
        return <span key={index}>{Book.authors.length === 1 || index === Book.authors.length - 1 ? a : `${a}, ` }</span>
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
                backgroundImage:`url(${Book.imageLinks?.thumbnail})`
               }}
            ></div>
            <ChangeBookShelfOptions bookShelf={bookShelf} updateUserBooks={updateUserBooks} book={Book}/>
          </div>
          <div className="book-title">{Book.title}</div>
          <div className="book-authors">{bookAuthors}</div>
        </div>
      </li>);
}

BookItem.propTypes = {
    Book:PropTypes.object.isRequired,
    bookShelfArray: PropTypes.array.isRequired,
    updateUserBooks: PropTypes.func.isRequired
}

export default BookItem;