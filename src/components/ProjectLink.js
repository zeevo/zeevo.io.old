/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { Popover, Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';

const ProjectLink = function ProjectLink({ project }) {
  const { theme } = useThemeUI();
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
  });

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    if (action === 'onMouseEnter') {
      if (referenceElement) {
        referenceElement.click();
      }
    } else if (action === 'onMouseLeave') {
      if (referenceElement) {
        referenceElement.click();
      }
    }
  };

  const handleClickOutside = (event) => {
    if (referenceElement && !referenceElement.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (
    <Popover className="relative ">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, 'onMouseEnter')}
          onMouseLeave={() => onHover(open, 'onMouseLeave')}
          className="flex flex-col"
        >
          <Popover.Button ref={setReferenceElement}>
            <a
              href={project.href}
              sx={{
                border: `2px solid ${theme.colors.text}`,
                paddingLeft: '1rem',
                height: '2.1875rem',
                lineHeight: '2.1875rem',
                width: '100%',
                display: 'inline-block',
                textDecoration: 'none',
                fontWeight: 'bold',
                color: 'text',
                '&:hover': {
                  borderColor: 'primary',
                  color: 'primary',
                },
                cursor: 'pointer',
              }}
            >
              {project.label}
            </a>
          </Popover.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel ref={setPopperElement} style={styles.popper} {...attributes.popper}>
              <div
                className="m-2 p-2 border-2 max-w-xs"
                sx={{
                  borderColor: 'text',
                  color: 'text',
                }}
              >
                <span>{project.description}</span>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default ProjectLink;
