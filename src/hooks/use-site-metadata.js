import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            url
            title
            subtitle
            copyright
            profilePic
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
                instagram {
                  name
                  url
                }
              }
              rss
            }
            projects {
              label
              href
              description
            }
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
