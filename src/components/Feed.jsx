import React, { Component } from 'react';
import Post from './Post';
import './style/feed.scss';

const RECENT = 5;

const FilterButton = props => (
  <button onClick={props.onClick} className="post-single__tags-list-item-link filterbtn">
    {props.tag}
  </button>
);

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: this.props.posts,
    };
    if (this.props.posts.length > RECENT) {
      this.state.filtered = this.props.posts.slice(0, RECENT);
    }
    const category = this.props.posts.map(post => post.node.frontmatter.category);
    this.state.category = category.filter((v, i) => category.indexOf(v) === i);
  }

  filterRecent() {
    if (this.props.posts.length > RECENT) {
      this.setState({ filtered: this.props.posts.slice(0, RECENT) });
    }
  }

  filterByCategory(category) {
    this.setState({
      filtered: this.props.posts.filter(post => post.node.frontmatter.category === category),
    });
  }

  render() {
    return (
      <div className="content__inner">
        <ul className="post-single__tags-list">
          <li className="post-single__tags-list-item">
            <FilterButton tag="All" onClick={() => this.setState({ filtered: this.props.posts })} />
            {this.state.category.map(category => (
              <FilterButton onClick={() => this.filterByCategory(category)} tag={category} />
            ))}
          </li>
        </ul>
        {this.state.filtered.map(post => (
          <Post data={post} key={post.node.fields.slug} />
        ))}
      </div>
    );
  }
}
