import React from "react";
import { Link } from "react-router-dom";
import {
  Container
} from "./styles";

export default function Esqueceu() {
  return (
    <Container>
      <section >
        <div >
          <form >
            <p > Recuperar </p>
            <label htmlFor="email" > Email: </label ><input type="text" />
            <button type="submit" > enviar </button>
            <Link to="/"><h5>voltar</h5></Link>
          </form >
        </div>
      </section>
    </Container>
  );
}