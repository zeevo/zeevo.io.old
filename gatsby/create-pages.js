const _ = require('lodash');
const path = require('path');
const slash = require('slash');

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post-template.js');
    const pageTemplate = path.resolve('./src/templates/page-template.js');
    const tagTemplate = path.resolve('./src/templates/tag-template.js');
    const categoryTemplate = path.resolve('./src/templates/category-template.js');

    graphql(`
      {
        allMarkdownRemark(limit: 1000, filter: { frontmatter: { draft: { ne: true } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                layout
                category
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      } else {
        _.each(result.data.allMarkdownRemark.edges, (edge) => {
          if (_.get(edge, 'node.frontmatter.layout') === 'page') {
            createPage({
              path: edge.node.fields.slug,
              component: slash(pageTemplate),
              context: { slug: edge.node.fields.slug },
            });
          } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
            createPage({
              path: edge.node.fields.slug,
              component: slash(postTemplate),
              context: { slug: edge.node.fields.slug },
            });

            let tags = [];
            if (_.get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags);
            }

            tags = _.uniq(tags);
            _.each(tags, (tag) => {
              const tagPath = `/tags/${_.kebabCase(tag)}/`;
              createPage({
                path: tagPath,
                component: tagTemplate,
                context: { tag },
              });
            });

            let categories = [];
            if (_.get(edge, 'node.frontmatter.category')) {
              categories = categories.concat(edge.node.frontmatter.category);
            }

            categories = _.uniq(categories);
            _.each(categories, (category) => {
              const categoryPath = `/categories/${_.kebabCase(category)}/`;
              createPage({
                path: categoryPath,
                component: categoryTemplate,
                context: { category },
              });
            });
          }
          resolve();
        });
      }
    });
  });
};

module.exports = createPages;
