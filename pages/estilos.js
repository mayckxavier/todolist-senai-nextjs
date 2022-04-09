import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import TodoList from "../src/TodoList";

export default function Estilos() {
  const estilo = {
    color: "red",
    fontSize: "24px",
  };

  return <p style={estilo}>Meu texto</p>;
}
