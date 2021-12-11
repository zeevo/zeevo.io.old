import React from 'react';
import Post from './Post';

const CategoryTemplateDetails = function CategoryTemplateDetails({ pageContext, data }) {
  const items = [];
  const { category } = pageContext;
  const posts = data.allMdx.edges;
  posts.forEach((post) => {
    items.push(<Post data={post} key={post.node.path} />);
  });

  return (
    <>
      <h1 className="page__title">{category}</h1>
      <div>{items}</div>
    </>
  );
};

export default CategoryTemplateDetails;
