import React, { Component } from 'react'


export class Header extends Component {
    render() {
        return (
            <div id="header">
                <label id="icon">Books Barn</label>
                <label>My Books</label>
                <label>Browse</label>
                <label>Community</label>
                <input id="searchBox" type="textbox" placeholder ="Search books" />
                <label>Sign In</label>
                <label>Join</label>
            </div>
        )
    }
}

export default Header
