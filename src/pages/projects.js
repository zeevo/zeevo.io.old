/** @jsx jsx */
import Helmet from 'react-helmet';
import { jsx } from 'theme-ui';
import banner from '../assets/images/banner.jpeg';
import BorderedBox from '../components/BorderedBox';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ProjectsList from '../components/Projects';
import '../components/style/pagetemplatedetails.scss';
import { useSiteMetadata } from '../hooks';

const Projects = function Projects() {
  const siteMetadata = useSiteMetadata();
  const { title, subtitle, url, projects } = siteMetadata;

  const pageTitle = 'Projects';
  const description = 'Projects I have written entirely or have contributed to at a great extent';

  return (
    <Layout>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@zeevosec" />
          <meta name="twitter:creator" content="@zeevosec" />
          <meta name="twitter:title" content={`${pageTitle} - ${title}`} />
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:image" content={url + banner} />
        </Helmet>
        <PageHeader>Projects</PageHeader>
        <ProjectsList projects={projects} />
      </div>
    </Layout>
  );
};

export default Projects;
