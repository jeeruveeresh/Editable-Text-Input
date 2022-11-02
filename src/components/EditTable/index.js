import {Component} from 'react'
import './index.css'

class EditTable extends Component {
  state = {
    saveButton: false,
    searchText: '',
  }

  searchInput = event => {
    this.setState({searchText: event.target.value})
  }

  saveButton = () => {
    this.setState(prevState => ({saveButton: !prevState.saveButton}))
  }

  render() {
    const {searchText, saveButton} = this.state
    const button = saveButton ? 'EDIT' : 'SAVE'
    return (
      <>
        <div className="bg-container">
          <div className="input-container">
            <h1 className="heading">Editable Text Input</h1>
            <div className="container">
              {saveButton ? (
                <p className="para">{searchText}</p>
              ) : (
                <input
                  type="text"
                  value={searchText}
                  onChange={this.searchInput}
                  className="searchInput"
                />
              )}

              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.saveButton}
                >
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default EditTable
