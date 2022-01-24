/** @jsx jsx */
import { jsx } from 'theme-ui';
import PageHeader from './PageHeader';
import ProjectLink from './ProjectLink';
import ProjectLinkReduced from './ProjectLinkReduced';

const Projects = function ({ projects, reduced = false }) {
  return (
    <div>
      <ul
        sx={{
          listStyle: 'none',
          paddingLeft: 0,
          flexDirection: 'column',
        }}
      >
        {projects.map((project, i) => (
          <li key={project.href}>
            {reduced ? (
              <ProjectLinkReduced
                project={project}
                {...(i === projects.length - 1 ? { borderBottom: true } : {})}
              />
            ) : (
              <ProjectLink
                project={project}
                {...(i === projects.length - 1 ? { borderBottom: true } : {})}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
