import { createGlobalStyle } from "styled-components";
import { setBackgroundColor, TEXT_COLOR } from "../utility/utility";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    ${setBackgroundColor()}
    color: ${TEXT_COLOR};
    font-family: 'Kanit', 'Pangolin', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

`;

export default GlobalStyle;
