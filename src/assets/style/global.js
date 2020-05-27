import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4  {
  font-family: 'Comfortaa', cursive;
}

p {
  font-family: 'Open Sans', sans-serif;
}
`;
