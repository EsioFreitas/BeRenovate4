import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

h1, h2, h3, h4  {
  font-family: 'Comfortaa', cursive;
  color: #10293D;
}

p {
  font-family: 'Open Sans', sans-serif;
  color: #10293D;
}

.container {
  width: 85%;
  margin: 0 auto;
}

.btn-primary{
  background-color: #FFD800;
  border: none;
  border-radius: .3rem;
  font-family: 'Open Sans', sans-serif;
  padding: 1rem 2rem;
  color: #10293D;
  font-weight: bold;
  cursor: pointer;
  transition: all .5s;

  &:hover{
    background-color: #10293D;
    color: white;
  }
}

`;
