import { createGlobalStyle } from "styled-components";
import "@fontsource/press-start-2p";

const GlobalStyles = createGlobalStyle`

:root {
  --primaryColor: #708ab0;
  --accentColor: #8865c2;
  --titleFont: press-start-2p, sans-serif;
  --displayFont: sans-serif;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  width: 100vw;
  margin: 0;
  padding: 40px;
  font-family: var(--displayFont);
  font-size: 1.25rem;
  margin: 0;
  background-color: var(--primaryColor);
  color: #fff;

}

h1,
h2 {
  margin: 0;
  font-family: var(--titleFont)

}

h1 {
  text-align: center;
  margin-bottom: 100px;
}

ul {
  list-style: none;
  padding: 0;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  font-size: inherit;
  background-color: transparent;
}

`;

export default GlobalStyles;
