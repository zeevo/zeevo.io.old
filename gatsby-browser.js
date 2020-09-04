// Wraps every page in a component
const React = require('react');
const { ThemeProvider } = require('theme-ui');
const theme = require('./src/theme.js');

module.exports.wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme} {...props}>
    {element}
  </ThemeProvider>
);
