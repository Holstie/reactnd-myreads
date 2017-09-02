import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    static propTypes = {
        changeBookShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }



    render() {
        const currentlyReadingBooks = this.props.books.filter(book => {
            return book.shelf === 'currentlyReading';
        });

        const read = this.props.books.filter(book => {
            return book.shelf === 'read';
        })

        const wantToRead = this.props.books.filter(book => {
            return book.shelf === 'wantToRead';
        })


        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            changeBookShelf={this.props.changeBookShelf}
                            title={"Read"}
                            booksInShelf={read}
                        />
                    </div>
                    <div>
                        <BookShelf
                            changeBookShelf={this.props.changeBookShelf}
                            title={"Currently read"}
                            booksInShelf={currentlyReadingBooks}
                        />
                    </div>
                    <div>
                        <BookShelf
                            changeBookShelf={this.props.changeBookShelf}
                            title={"Want to read"}
                            booksInShelf={wantToRead}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                    >Search for book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks