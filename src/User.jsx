import React, { useState } from "react";
import Produto from "./Produto";

function User(props) {
  const [state, setState] = useState("carro");

  return (
    <>
      <h1>{props.usuario}</h1>
      <Produto produto={state} />
      <button onClick={() => setState(state === "carro" ? "moto" : "carro")}>
        alterar entre carro e moto
      </button>
    </>
  );
}

export default User;
