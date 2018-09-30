import React, { Component } from 'react'
import Post from './Post'
import _ from 'lodash'

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/${this.props.name}/posts`,
     { headers: { 'Authorization': 'whatever-you-want' }})
      .then(res => res.json())
      .then(data => this.setState( { posts: data } ))
  }

  render() {
    const { posts } = this.state
    const orderedPosts = _.orderBy(posts, ['voteScore'])
    return (
      <li key={this.props.name}>
        {this.props.name}
        <ul>
          {orderedPosts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </ul>
      </li>
    )
  }
}


export default Category
