/** @jsx jsx */
import { jsx, Themed } from 'theme-ui';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

const ProjectLink = function ProjectLink({ project }) {
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
      <Themed.a
        ref={setReferenceElement}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={project.href}
      >
        {project.label}
      </Themed.a>

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
