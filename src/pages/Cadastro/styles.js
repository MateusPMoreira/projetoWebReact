import styled from "styled-components";
// import bgLogin from "../../assets/background-login.jpg";
export const Container = styled.div`

section {
display: flex;
justify-content: center;
align-items: center;
margin-top: 90px;
}

  div {    
    margin-top: 60px;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    background: yellowgreen;
  }

  form {
    width: 350px;
    /* max-width: 500px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;   
    margin: 35px; 
  }

  form p {    
    font-size: 50px;
    font-family: Fira Code Retina;    
    color: MintCream;
    /* margin-bottom: 20px; */
    /* margin-top: 50px; */
    /* line-height: 110px; */
  }

  form p sub {
    font: 50px, Fira Code Retina;
    -webkit-font-smoothing: antialiased !important;
  }

  label,
  input,
  button {
    width: 100%;
    font-family: Fira Code Retina;
  }

  input,
  button {
    height: 40px;
    border: 0;
    font-size: 0.9em;
    outline: 0;
  }

  form input {
    background: rgba(255, 255, 255, 0.2);
    color: MintCream;
    padding: 0 15px;
    margin-bottom: 10px;
    /* font-family: Fira Code Retina; */
  }

  form button {
    margin-top: 29px;
    /* margin-bottom: 80px; */
    font-weight: Fira Code Retina;
    /* background: Snow;GhostWhite */
    width: 46%;
 
    background: rgba(255, 255, 255, 0.2);/*GhostWhite*/
    color: snow;

  }

  form label{
    font-size: 14px;
    font-family: Fira Code Retina;
    color: MintCream;
    /* margin: 10px; */
  }

 h5{
   /* display: none; */
   /* text-decoration: none; */
   color: MintCream;
   font-family: Fira Code Retina;
   margin-top: 23px;
 }
`;
