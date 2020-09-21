import React from 'react';
import Post from './Post';

class CategoryTemplateDetails extends React.Component {
  render() {
    const items = [];
    const { category } = this.props.pageContext;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <>
        <h1 className="page__title">{category}</h1>
        <div>{items}</div>
      </>
    );
  }
}

export default CategoryTemplateDetails;
