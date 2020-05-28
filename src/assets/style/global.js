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
  font-size: 1.5rem;
}

.container {
  width: 85%;
  margin: 0 auto;
}

.btn {
  border: none;
  border-radius: .3rem;
  font-family: 'Open Sans', sans-serif;
  padding: 1rem 2rem;
  font-weight: bold;
  transition: all .5s;
  cursor: pointer;
<<<<<<< HEAD
  box-shadow: 1px 1px 3px #35353550;

  &:hover {
    box-shadow: 1px 2px 5px #353535;
  }
=======
>>>>>>> 99dd8c9... Add about section on main page
}

.btn-primary{
  background-color: #FFD800;
  color: #10293D;

  &:hover{
    background-color: #10293D;
    color: white;
  }
}

.btn-secondary{
  background-color: #10293D;
  color: white;

  &:hover{
    background-color: #10293F;
    color: white;
  }
}

`;
