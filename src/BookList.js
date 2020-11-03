import './BookList.css'

import React, { Component } from "react"

import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component  {
  
  render(){
    const {books, bookAction, favouriteMode} = this.props
    const id = !favouriteMode ? "bookList" : "bookmarkList"
    return (
      <div id={id} className="BookList" data-testid="BookList">
        {!favouriteMode && <h2>Résultats de recherche :</h2>}
        {books.length === 0 ? (
            <p>Aucun livre n’a été trouvé.</p>
          ) : (
            <ul>
              {books.map((book, index) => <Book book={book} key={index} index={index} bookAction={bookAction} favouriteMode={favouriteMode} />)}
            </ul>
        )}
      </div>
    )
  }
}

BookList.propTypes = {
  favouriteMode: PropTypes.bool.isRequired,
  bookAction: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
  )
}

BookList.defaultProps = {
  books: null
}

export default BookList
