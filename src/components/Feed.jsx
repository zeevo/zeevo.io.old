import React, { Component } from 'react';
import Post from './Post';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: this.props.posts,
    };
    const category = this.props.posts.map(post => post.node.frontmatter.category);
    this.state.category = category.filter((v, i) => category.indexOf(v) === i);
  }

  filterByCategory(category) {
    this.setState({
      filtered: this.props.posts.filter(post => post.node.frontmatter.category === category),
    });
  }

  render() {
    return this.state.filtered.map(post => <Post data={post} key={post.node.fields.slug} />);
  }
}

export default Feed;
