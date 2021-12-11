import React from 'react';
import Post from './Post';

const Feed = function Feed(props) {
  return props.posts.map((post) => <Post data={post} key={post.node.path} />);
};

export default Feed;
