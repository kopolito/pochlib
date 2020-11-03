import './App.css'

import React, { Component } from "react"

import BookList from './BookList'
import BookSearch from './BookSearch'

class App extends Component {
  // état de départ
  state = {
    books: [], // empty books list
  }

  // Add book to Poch'List
  addToBookmark = (book) => {
    const entries = this.state.books
    // check for duplicate
    for(let i=0; i<entries.length; i++){
      if(entries[i].id === book.id){
        return;
      }
    }
    entries.push(book)
    this.setState({books: entries})
    this.saveSession()
  }

  // remove book from Poch'List
  removeFromBookmarks = (index) => {
    const entries = this.state.books
    entries.splice(index, 1)
    this.setState({books: entries})
    this.saveSession()
  }

  // save to session storage
  saveSession(){
    sessionStorage.setItem('books', JSON.stringify(this.state.books))
  }

  // load saved books
  componentDidMount(){
    let bookList = JSON.parse(sessionStorage.getItem('books'))
    this.setState({books: bookList != null ? bookList : []})
  }

  render(){
    const { books } = this.state
    return (
      <div id="myBooks" className="App" data-testid="App">
        <h1 className="title">Poch'Lib</h1>
        <h2 className="h2">Nouveau Livre</h2>
        <BookSearch
        showForm={false}
        addToBookmark={this.addToBookmark}
        />
        <hr />
        <h2>Ma poch'liste</h2>
        {books.length > 0 && <BookList books={books} bookAction={this.removeFromBookmarks} favouriteMode={true} />}
      </div>
    )
  }
}

export default App
