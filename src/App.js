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

  getOurBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
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

  searchBooks = (query) => {
    if (query) {
      BooksAPI.getAll()
        .then(booksAPI => {
          BooksAPI.search(query)
            .then(response => {
              let books = response;
              books = books.map(book => {
                return book;
              });
              if (this.state.books !== books) {
                this.setState({ books });
              }
            });
        })
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks
            searchBooks={this.searchBooks}
            changeBookShelf={this.changeBookShelf}
            books={this.state.books}
          />
        )} />
        <Route exact path="/" render={() => (
          <ListBooks
            changeBookShelf={this.changeBookShelf}
            books={this.state.books}
            getOurBooks={this.getOurBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
