import prism from '@theme-ui/prism/presets/theme-ui';

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#f2f2f2',
    background: '#151515',
    primary: '#4CC9F0',
    secondary: '#7FFFD4',
    muted: '#f6f6f6',
    modes: {
      light: {
        text: '#333',
        background: '#EEEEEE',
        primary: '#07c',
        secondary: '#405d27',
      },
      cyber: {
        text: '#00ff2b',
        background: '#000',
        primary: '#FF00FF',
        secondary: '#00ff2b',
      },
    },
  },
  styles: {
    code: {
      ...prism,
    },
    a: {
      color: 'primary',
    },
  },
};
