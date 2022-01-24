import prism from '@theme-ui/prism/presets/theme-ui';

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 550,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#f2f2f2',
    background: '#151515',
    primary: '#4CC9F0',
    secondary: '#0064ab',
    muted: '#f6f6f6',
    modes: {
      light: {
        text: '#333',
        background: '#EEEEEE',
        primary: '#0077cc',
        secondary: '#004678',
      },
      cyber: {
        text: '#00ff2b',
        background: '#000',
        primary: '#FF00FF',
        secondary: '#00ff2b',
      },
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      cursor: 'pointer',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
      h1: {
        fontWeight: 'heading',
      },
      h2: {
        fontWeight: 'heading',
      },
    },
    pre: {
      '&::-webkit-scrollbar': {
        backgroundColor: 'primary',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'text',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary',
      },
      overflowX: 'auto',
    },
    code: {
      ...prism,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    li: {
      lineHeight: 2,
    },
    ul: {
      paddingInlineStart: 4,
    },
  },
};
