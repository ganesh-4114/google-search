import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggest-item">
      <p className="suggest-text">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
