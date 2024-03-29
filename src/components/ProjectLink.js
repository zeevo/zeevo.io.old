/** @jsx jsx */
import { jsx, Themed, useThemeUI } from 'theme-ui';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

const ProjectLink = function ProjectLink({ project, borderBottom = false }) {
  const [hovered, setHovered] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{}}
      >
        <a
          sx={{
            borderWidth: '1px',
            borderColor: 'text',
            borderStyle: 'solid',
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: borderBottom ? 1 : 0,
            width: '100%',
            height: '100%',
            display: 'inline-block',
            textDecoration: 'none',
            lineHeight: 2,
            padding: 1,
            fontWeight: 'bold',
            color: 'text',
            '&:hover': {
              color: 'background',
              backgroundColor: 'primary',
            },
            cursor: 'pointer',
          }}
          href={project.href}
        >
          {project.label}
        </a>
      </div>

      {hovered && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          sx={{
            padding: 1,
            maxWidth: '10rem',
            zIndex: 10,
            borderWidth: '1px',
            borderColor: 'text',
            borderStyle: 'solid',
            backgroundColor: 'background',
            opacity: '100',
          }}
          {...attributes.popper}
        >
          <span>{project.description}</span>
        </div>
      )}
    </>
  );
};

export default ProjectLink;
