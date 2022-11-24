import PropTypes from "prop-types"
import { useState } from "react";

const ChangeBookShelfOptions = ({ bookShelf, updateUserShelfBooks, book }) => {

   const [selectedOption, setSelectedOption] = useState(bookShelf)

   const handleSelectedOption = (e) => {
      const newShelf = e.target.value
      setSelectedOption(newShelf)
      updateUserShelfBooks(book, newShelf)
   }

   const isSelectedOption = (option) => {
     const tick = selectedOption === option ? "✓" : ""   
     return tick;
   }

    return (<div className="book-shelf-changer" style={{backgroundColor:"#A020F0"}}>
    <select onChange={(e) => handleSelectedOption(e)} value={selectedOption==="none" ? "header" : selectedOption}>
      <option value="header" disabled>
        { bookShelf !== "none" ? "Move to..." : "Add to..."}
      </option>
      <option value="currentlyReading">{`Currently Reading ${isSelectedOption("currentlyReading")}`}</option>
      <option value="wantToRead">{`Want to Read ${isSelectedOption("wantToRead")}`}</option>
      <option value="read">{`Read ${isSelectedOption("read")}`}</option>
      { bookShelf !== "none" ? (<option value="none">{`None ${isSelectedOption("none")}`}</option>) : null}
    </select>
  </div>
  );
}

ChangeBookShelfOptions.propTypes = {
  bookShelf: PropTypes.string.isRequired,
  updateUserShelfBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
}

export default ChangeBookShelfOptions;