import PropTypes from "prop-types"

const ChangeBookShelfOptions = ({existInUserShelf}) => {

    return (<div className="book-shelf-changer">
    <select>
      <option value="none" disabled>
        {existInUserShelf ? "Move to..." : "Add to..."}
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>);

}

ChangeBookShelfOptions.propTypes = {
    existInUserShelf: PropTypes.bool.isRequired
}

export default ChangeBookShelfOptions;