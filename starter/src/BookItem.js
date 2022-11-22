import PropTypes from "prop-types"
import ChangeBookShelfOptions from "./ChangeBookShelfOptions";

const BookItem = ({Book, existInUserShelf}) => {

    const bookAuthors = Book.authors?.map((a, index) => {
        return <span key={index}>{Book.authors.length === 1 || index === Book.authors.length - 1 ? a : `${a}, ` }</span>
    })

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
            <ChangeBookShelfOptions existInUserShelf={existInUserShelf} state={existInUserShelf ? Book.shelf : "none"}/>
          </div>
          <div className="book-title">{Book.title}</div>
          <div className="book-authors">{bookAuthors}</div>
        </div>
      </li>);
}

BookItem.propTypes = {
    Book:PropTypes.object.isRequired,
    existInUserShelf: PropTypes.bool.isRequired
}

export default BookItem;