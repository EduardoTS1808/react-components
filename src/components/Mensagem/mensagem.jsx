import React from "react";


export default function Mensagem() {
    
   let texto = "Olá Mundo!!"
    
 function MeuComponente(props)  {
        return( <p>{props.context}</p> )
      }
    return (
        <>
        <div>
            <h2> Por variável: {texto}</h2>
        <div>
        <MeuComponente context="Texto passando por propriedade."/>
        </div>
        </div>
       
        </>
    )
}