import './BookSearch.css'

import React, { Component } from "react"

import BookForm from './BookForm'
import BookList from './BookList'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

class BookSearch extends Component {
  // état de départ
  state = {
    showForm: false, // show form
    searching: false, // searching state
    entries: null, // empty result list
  }

  resetState(){
    this.setState({entries: null, showForm: false, searching: false})
  }
  
  // arrow func for binding
  displayForm = () => {
    this.setState({ showForm: true })
  }

  searchBooks = (title, author) => {
    this.setState({ searching: true, entries: null })
    
    //const apiKey = 'AIzaSyCUGX88JrS1FvmarmXo6bljGxGgMsfd0rc'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    
    fetch(url, { signal: this.abortController.signal })
      .then(response => response.json())
      .then(responseData => this.readResponse(responseData))
      .catch(error => {
        if (error.name === 'AbortError'){
          console.log('BookSearch Search aborted')
        } else {
          console.log('Error fetching and parsing data', error)
        }
        this.resetState()
      })
  }

  readResponse(responseData){
    let items = []
    if(responseData != null && responseData['items'] && responseData['items'].length){
      let max = Math.min(10, responseData['items'].length)
      for (let i = 0; i < max; i++) {
        const item = responseData['items'][i]
        items.push({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "",
          description: item.volumeInfo.description ? item.volumeInfo.description : "",
          thumbnail: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : "unavailable.png"
        })
      }
    }
    this.setState({entries: items, searching: false})
  }

  abortController = new window.AbortController()
  
  // arrow func for binding
  cancelSearch = () => {
    this.abortController.abort()
    this.abortController = new window.AbortController()
    this.resetState()
  }

  render() {
    const { searching, showForm, entries } = this.state
    return (
      <div id="BookSearch" className="BookSearch" data-testid="BookSearch">
        {showForm ? (
        <BookForm
          searchBooks={this.searchBooks}
          cancelSearch={() => this.cancelSearch()}
        />
        ) : (
          <center><button onClick={() => this.displayForm()} className="green">Ajouter un livre</button></center>
        )}
        {showForm && (<button className="red" onClick={this.cancelSearch}>Annuler</button>)}
        {searching && ( <center><ReactLoading className="loading" type="cylon" color="#999" height={100} width={100} /></center>)}
        {entries ? (<BookList books={entries} bookAction={this.props.addToBookmark} favouriteMode={false} />) : ''}
      </div>
    )
  }
}

BookSearch.propTypes = {
  addToBookmark: PropTypes.func.isRequired,
  searching: PropTypes.bool,
  showForm: PropTypes.bool.isRequired,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
  )
}

BookSearch.defaultProps = {
  showForm: false,
  entries: []
}

export default BookSearch
