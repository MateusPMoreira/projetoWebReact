import React, { useState } from "react";
import { Link } from "react-router-dom"
import {
  Container
} from "./styles";
/*import account from "../../assets/account.svg";*/
export default function Login() {
  // const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(" ");
  // const [senha, setsenha] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`olá ${email}`);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(`olá ${senha}`);
  // }
  return (
    <Container>
      <section>
        <div >
          <form onSubmit={handleSubmit}>
            <p > Login </p>
            <label htmlFor="email" > Email: </label>
            {/* required obriga o usuario a escerever algo no inpu */}
            <input id="email"
              type="text"
              required
              onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="senha"> Senha: </label>
            <input id="password" type="password" required />
            <button type="submit" > Entrar </button>
          </form >
        </div>
      </section>
      <nav><Link to="/esqueceu"><h5>Esqueci minha senha</h5></Link></nav>
    </Container>

  );
}