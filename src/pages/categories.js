/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

class CategoriesRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const categories = this.props.data.allMdx.group;

    return (
      <Layout>
        <div>
          <Helmet title={`All Categories - ${title}`} />
          <h1 className="page__title">Categories</h1>
          <div className="page__body">
            <div className="categories">
              <ul className="categories__list" sx={{ listStyle: 'none' }}>
                {categories.map((category) => (
                  <li key={category.fieldValue} className="categories__list-item">
                    <Link
                      to={`/categories/${kebabCase(category.fieldValue)}/`}
                      sx={{
                        color: 'text',
                        // fontWeight: 'heading',
                        '&:hover': {
                          color: 'primary',
                        },
                      }}
                    >
                      {category.fieldValue} ({category.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CategoriesRoute;

export const pageQuery = graphql`
  query CategoryesQuery {
    site {
      siteMetadata {
        url
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          socials {
            twitter {
              name
              url
            }
            github {
              name
              url
            }
            discord {
              name
              url
            }
          }
          rss
        }
      }
    }
    allMdx(limit: 2000, filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
