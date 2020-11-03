import './BookForm.css'

import React, { Component } from "react"

import PropTypes from 'prop-types'

class BookForm extends Component {
   // état de départ
  state = {
    error: "", // error text
    title: "", // searched Book title
    author: "", // searched Book author
  }

  // Arrow fx for binding
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  // Arrow fx for binding
  searchBooks = (event) => {
    event.preventDefault()
    const { title, author } = this.state
    if(title.length < 2 && author.length < 2){
      this.setState({error: "Veuillez saisir un titre ou un auteur"})
    } else {
      this.setState({error: null})
      this.props.searchBooks(title, author)
    }
  }

  render() {
    const {error} = this.state
    return (
      <form id="BookForm" className="BookForm" onSubmit={this.searchBooks} data-testid="BookForm">
        {error && (<span className="error">{error}</span>)}
        <div className="formBlock">
          <label htmlFor="title">Titre : </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className="formBlock">
          <label htmlFor="author">Auteur : </label>
          <input
            id="author"
            name="author"
            type="text"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </div>
        <button type="submit" className="green">Rechercher</button>
      </form>
    )
  }
}

BookForm.propTypes = {
  error: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  searchBooks: PropTypes.func.isRequired,
  cancelSearch: PropTypes.func.isRequired
}

BookForm.defaultProps = {
  error: ""
}

export default BookForm
