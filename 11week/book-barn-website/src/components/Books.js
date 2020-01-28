import React, { Component } from 'react'

export class Books extends Component {
    render() {

        const bookItems = this.props.books
        const booksList = bookItems.map((book) => {
            return (<ul class="booksUL">
                <img alt="sample-cover"src="https://www.bookcoversclub.com/wp-content/uploads/2018/02/book-cover-352.jpg" />
                <li>{book.title}</li>
                <li>Language: {book.language}</li>
                <li>Author: {book.author}</li>
                
                </ul>
            )
        })
         console.log(bookItems)

        return (
       
            <div id="booksDisplay">

            <div id="scrollMenu">
                {booksList}
            </div>

            </div>
        )
    }
}

export default Books
