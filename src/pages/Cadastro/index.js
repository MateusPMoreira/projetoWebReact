import React from "react";
import { Link } from "react-router-dom"
import {
  Container
} from "./styles";
/*import account from "../../assets/account.svg";*/

export default function Cadastro() {
  return (
    <Container>
      <section >
        <div >
          <form >
            <p > Cadastro </p>
            <label id="nome" htmlFor="nome" >Nome:</label >
            <input type="text" />
            <label id="email" htmlFor="email" >Email:</label >
            <input type="text" />
            <label htmlFor="ra" >Senha:</label >
            <input type="password" />
            <button type="submit" > Entrar </button>
            <Link to="/"><h5>Já possuo uma conta</h5></Link>
          </form >
        </div>
      </section>
    </Container>
  );
}


