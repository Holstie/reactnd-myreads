import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      this.setState({ read: books.filter((book) => book.shelf === 'read') })
    })
  }

  changeBookShelf = (originalBook, shelf) => {
    BooksAPI.update(originalBook, shelf)
      .then(data => {
        this.setState(currentStatus => ({
          books: currentStatus.books.map(book => {
            if (originalBook.id === book.id) {
              book.shelf = shelf;
            }
            return book;
          })
        }));
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks></SearchBooks>
        )} />
        <Route exact path="/" render={() => (
          <ListBooks
            changeBookShelf={this.changeBookShelf}
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
