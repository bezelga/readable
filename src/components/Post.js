import React, { Component } from 'react'

class Post extends Component {
  render() {
    return(
      <div key={this.props.id}>
        <p>author: {this.props.author}</p>
        <p>title: {this.props.title}</p>
        <p>score: {this.props.voteScore}</p>
      </div>
    )
  }
}

export default Post
