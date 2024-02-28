import React from "react";

export default function Segundo(){

    const listaDeTextos = ["Ola", "Mundo"];
    return (
      <ul>
        {listaDeTextos.map((texto, index) => (
          <li key={index}>{texto}</li>
        ))}
      </ul>
    );
    

}