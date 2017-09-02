import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelfChanger extends Component {
    static propTypes = {
        changeBookShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.props.changeBookShelf(this.props.book, event.target.value)
    }

    render() {
        const shelf = this.props.book.shelf;

        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}
export default BookShelfChanger
