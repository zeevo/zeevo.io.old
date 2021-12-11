import React from 'react';
import Post from './Post';

const TagTemplateDetails = function TagTemplateDetails(props) {
  const items = [];
  const tagTitle = props.pageContext.tag;
  const posts = props.data.allMdx.edges;

  posts.forEach((post) => {
    items.push(<Post data={post} key={post.node.path} />);
  });

  return (
    <>
      <h1 className="page__title">
        All Posts tagged as &quot;
        {tagTitle}
        &quot;
      </h1>
      <div className="page__body">{items}</div>
    </>
  );
};

export default TagTemplateDetails;
