import PropTypes from "prop-types"
import { useState } from "react";

const ChangeBookShelfOptions = ({existInUserShelf, state}) => {

   const [selectedOption, setSelectedOption] = useState(state)

   const handleSelectedOption = (e) => {
      setSelectedOption(e.target.value)
   }

   const isSelectedOption = (option) => selectedOption === option ? " ✓" :""
   

    return (<div className="book-shelf-changer">
    <select onChange={(e) => handleSelectedOption(e)} value={selectedOption}>
      <option disabled>
        {existInUserShelf ? "Move to..." : "Add to..."}
      </option>
      <option value="currentlyReading">{`Currently Reading ${isSelectedOption("currentlyReading")}`}</option>
      <option value="wantToRead">{`Want to Read ${isSelectedOption("wantToRead")}`}</option>
      <option value="read">{`Read ${isSelectedOption("read")}`}</option>
      {existInUserShelf ? (<option value="none">{`None ${isSelectedOption("none")}`}</option>) : null}
    </select>
  </div>);

}

ChangeBookShelfOptions.propTypes = {
    existInUserShelf: PropTypes.bool.isRequired,
    state: PropTypes.string.isRequired
}

export default ChangeBookShelfOptions;