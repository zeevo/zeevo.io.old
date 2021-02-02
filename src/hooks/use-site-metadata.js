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
              twitter
              github
              rss
            }
            projects {
              label
              href
            }
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
