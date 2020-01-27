import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return (
            <div className="Article">
                <div className="Title">{this.props.Title}</div>
                <div className="Text">{this.props.Text}</div>
                <div className="CLBar">
                    <div className="Comments">{this.props.Comments} comments</div>
                    <div className="Likes">{this.props.Likes} likes</div>
                </div>
            </div>
        )
    }
}

export default Article
