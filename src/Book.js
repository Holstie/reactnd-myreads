import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    static propTypes = {
        changeBookShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    render() {
        console.log(this.props.book)
        const backgroundImage = this.props.book.imageLinks.thumbnail;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193, backgroundImage: `url(${backgroundImage})`
                    }}></div>
                    <div>
                        <BookShelfChanger
                            changeBookShelf={this.props.changeBookShelf}
                            book={this.props.book}
                        />
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {this.props.book.authors.map((author) => (
                        <li key={author}>
                            {author}
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}
export default Book
