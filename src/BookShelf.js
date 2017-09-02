import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        changeBookShelf: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        booksInShelf: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.booksInShelf.map((book) => (
                            <li key={book.id}>
                                <div>
                                    <Book
                                        changeBookShelf={this.props.changeBookShelf}
                                        book={book}
                                    />
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookShelf
