import './Book.css'

import React, { Component } from "react"
import { faBookmark, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

class Book extends Component {

  render(){
    const {book, bookAction, index, favouriteMode} = this.props
    const idSuffix = !favouriteMode ? "book" : "bookmark"
    return (
      <li id={idSuffix + index} className="Book" data-testid="Book">
        <p className="title">
          <strong>Titre : {book.title}</strong>
          {!favouriteMode ? (
            <FontAwesomeIcon icon={faBookmark} onClick={()=>bookAction(book)} className="bookAction bookmark" alt="Ajouter aux favoris" />
          ) : (
            <FontAwesomeIcon icon={faTrashAlt} onClick={()=>bookAction(index)} className="bookAction trash" src="" alt="Retirer des favoris" />
          )}
        </p>
        <p>
          <strong>Id : {book.id}</strong>
        </p>
        <p>
          Auteur : <strong>{book.author.length ? book.author : "Auteur inconnu"}</strong>
        </p>
        <p>
          Description : {book.description.length ? (book.description.substr(0, 200) + "...") : "Information manquante"}
        </p>
        <center><img src={book.thumbnail} width="128" alt={book.title} /></center>
      </li>
    )
  }
}

Book.propTypes = {
  favouriteMode: PropTypes.bool.isRequired,
  bookAction: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  book:  PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
}

Book.defaultProps = {
  book: null
}

export default Book
