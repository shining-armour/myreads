import PropTypes from "prop-types"
import BookItem from "./BookItem";

const BookShelf = ({shelfTitle, booksList}) => {

    const bookItems = booksList.map((book) => {
        return <BookItem key={book.id} Book={book}/>
    })

    return (<div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">{bookItems}</ol>
    </div>
  </div>);
}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    booksList:PropTypes.array.isRequired
}

export default BookShelf;