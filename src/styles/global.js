import {
  createGlobalStyle
} from "styled-components";

export default createGlobalStyle`
  /*@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap');*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    -webkit-font-smoothing: antialiased !important;
  }
p{
   
   font: 24px Fira Code Retina;
}
  html, body, #root {
    height: 100%;
  }

  body {
    background-image: linear-gradient(white, gray);
    /* font-family: 'Roboto', sans-serif; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.6em;
    font-weight: bold;
  }

  a {
    /* color: red; */
    text-decoration: none;
  }
`;