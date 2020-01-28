import React, { Component } from 'react';
import './App.css';
import Books from "./components/Books"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./Header.css"
import "./Books.css"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    })
  }


  render(){
  return (
    <div>
    <Header />
    <Books books={this.state.books}/>
    <Footer />
    </div>
  );
  }
}

export default App;
